import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  standalone: true
})
export class BatteryComponent {
  @Input() percentage: number = 0;

  get fillWidth(): number {
    return Math.max(0, Math.min(100, this.percentage));
  }

  get fillColor(): string {
    if (this.percentage <= 20) return '#ff4d4f';     // red
    if (this.percentage <= 50) return '#faad14';     // yellow
    return '#52c41a';                                // green
  }
}
