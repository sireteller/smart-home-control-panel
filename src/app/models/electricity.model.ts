export type ElectricityData = {
  electricityTimes: ElectricityHour[];
  batteryAutomationEnabled: boolean;
  batterySOC: number;
  batteryState: BatteryState;
}

export type BatteryState = 'IDLE' | 'CHARGE' | 'DISCHARGE';
export type ElectricityState = 'CONSUME' | 'HOLD' | 'CHARGE';

export type ElectricityHour = {
  time: number;
  price: number;
  serviceFees: number;
  totalPrice: number;
  state: ElectricityState;
  current: boolean;
}
