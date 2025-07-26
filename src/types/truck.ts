export interface Truck {
  id: string;
  name: string;
  volume_m3: number;
  max_weight_kg: number;
}
export interface TruckWithLocation extends Truck {
  latitude: number;
  longitude: number;
}