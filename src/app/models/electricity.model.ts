export type ElectricityData = {
  electricityPrices: ElectricityPrice[];
  batteryAutomationEnabled: boolean;
}

export type ElectricityPrice = {
  time: number;
  price: number;
  serviceFees: number;
  totalPrice: number;
  current: boolean;
}
