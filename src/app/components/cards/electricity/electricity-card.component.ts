import {Component, OnDestroy, OnInit} from "@angular/core";
import {
  VisAxisModule, VisCrosshairModule,
  VisLineModule, VisScatterModule,
  VisStackedBarModule,
  VisTooltipModule,
  VisXYContainerModule
} from "@unovis/angular";
import {StackedBar} from "@unovis/ts";
import {DatePipe, NgIf} from "@angular/common";
import {BatteryComponent} from "./battery/battery.component";
import {ElectricityService} from "../../../services/electricity.service";
import {SettingService} from "../../../services/setting.service";
import {BatteryState, ElectricityHour} from "../../../models/electricity.model";
import {interval, Subscription, timer} from "rxjs";
import {Settings} from "../../../models/settings.model";

@Component({
  selector: "app-electricity-card",
  styleUrl: "./electricity-card.component.css",
  templateUrl: "./electricity-card.component.html",
  imports: [
    VisXYContainerModule,
    VisLineModule,
    VisAxisModule,
    VisStackedBarModule,
    VisTooltipModule,
    BatteryComponent,
    VisCrosshairModule,
    NgIf,
    VisScatterModule
  ],
  standalone: true
})
export class ElectricityCardComponent implements OnInit, OnDestroy {
  protected readonly CHEAPEST_PRICE = 5;
  protected readonly EXPENSIVE_PRICE = 50;

  x = (d: ElectricityHour): number => d.time
  y = [
    (d: ElectricityHour): number => d.price > 0 ? d.serviceFees : d.totalPrice,
    (d: ElectricityHour): number => d.price > 0 ? d.price : 0,
  ];
  currentX = (): number => this.currentPrice.time
  currentY = [(): number => this.yDomain[1]];
  chargeY = [1, 1]
  yDomain!: [number, number];
  ticks!: number[];

  subscription: Subscription = new Subscription();
  electricityPrices!: ElectricityHour[];
  currentPrice!: ElectricityHour;
  batteryAutomationEnabled!: boolean;
  batterySOC!: number;
  batteryState!: BatteryState;

  constructor(private datePipe: DatePipe,
              private electricityService: ElectricityService,
              private settingService: SettingService) {
  }

  ngOnInit() {
    this.loadPrices();

    const now = new Date();
    const nextRefresh = new Date(now);
    nextRefresh.setHours(now.getHours() + 1, 1, 0, 0);
    const msUntilNextLoad = nextRefresh.getTime() - now.getTime();
    const initialTimer = timer(msUntilNextLoad);

    this.subscription.add(
      initialTimer.subscribe(() => {
        this.loadPrices();

        const hourly = interval(60 * 60 * 1000);
        this.subscription.add(
          hourly.subscribe(() => this.loadPrices())
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadPrices() {
    this.electricityService.getElectricityData().subscribe(result => {
      this.electricityPrices = result.electricityTimes;
      this.batteryAutomationEnabled = result.batteryAutomationEnabled;
      this.batterySOC = result.batterySOC;
      this.batteryState = result.batteryState;
      this.currentPrice = this.electricityPrices.find(price => price.current)!;
      this.ticks = this.electricityPrices.map(data => data.time).filter((_, index) => index % 8 === 0)
      let min = 0;
      let max = 10;
      for (const data of this.electricityPrices) {
        min = Math.min(min, data.totalPrice);
        max = Math.max(max, data.totalPrice);
      }
      this.yDomain = [min, Math.ceil(max / 10) * 10];
    });
  }

  handleBatteryAutomationToggle() {
    this.settingService.set(Settings.BATTERY_AUTOMATION, this.batteryAutomationEnabled ? '0' : '1')
      .subscribe(() => this.batteryAutomationEnabled = !this.batteryAutomationEnabled);
  }

  triggers = {
    [StackedBar.selectors.bar]: (d: ElectricityHour) => `
      <span>${this.datePipe.transform(d.time, 'dd.MM HH:mm')}</span></br>
      <span>Price: ${d.price} senti/kWh</span></br>
      <span>Service fees: ${d.serviceFees} senti/kWh</span></br>
      <span>Total: ${d.totalPrice} senti/kWh</span>
    `
  };

  tickFormat = (tick: number, i: number, ticks: number[]) => {
    return this.datePipe.transform(tick, 'HH')!;
  };

  color = (d: ElectricityHour, i: number) => [
    '#7e7e7e',
    this.blendRGB([144, 232, 255], [255, 0, 0], d.price)
  ][i];

  chargeColor = (d: ElectricityHour, i: number) => [
    'rgba(0,0,0,0)',
    d.state === 'CHARGE' ? '#2bc0ff' : d.state === 'HOLD' ? '#ffffff' : 'rgba(0,0,0,0)'
  ][i];

  linearInterpolate(a: number, b: number, p: number): number {
    return a + (b - a) * p;
  }

  blendRGB(rgb1: number[], rgb2: number[], price: number): string {
    const p = Math.max(this.CHEAPEST_PRICE, Math.min(this.EXPENSIVE_PRICE, price));
    const t = (p - this.CHEAPEST_PRICE) / (this.EXPENSIVE_PRICE - this.CHEAPEST_PRICE);

    const r = Math.round(this.linearInterpolate(rgb1[0], rgb2[0], t));
    const g = Math.round(this.linearInterpolate(rgb1[1], rgb2[1], t));
    const b = Math.round(this.linearInterpolate(rgb1[2], rgb2[2], t));

    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
}
