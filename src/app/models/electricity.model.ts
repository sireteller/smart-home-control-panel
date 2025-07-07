export type ElectricityData = {
  electricityHours: ElectricityHour[];
  batteryAutomationEnabled: boolean;
  batterySOC: number;
  batteryState: BatteryState;
}

export type BatteryState = 'IDLE' | 'CHARGE' | 'DISCHARGE';

export type ElectricityHour = {
  time: number;
  price: number;
  serviceFees: number;
  totalPrice: number;
  charge: boolean;
  current: boolean;
}
