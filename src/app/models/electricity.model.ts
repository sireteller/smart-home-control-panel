export type ElectricityData = {
  electricityPrices: ElectricityPrice[];
  batteryAutomationEnabled: boolean;
  batterySOC: number;
  batteryState: BatteryState;
}

export type BatteryState = 'IDLE' | 'CHARGE' | 'DISCHARGE';

export type ElectricityPrice = {
  time: number;
  price: number;
  serviceFees: number;
  totalPrice: number;
  charge: boolean;
  current: boolean;
}
