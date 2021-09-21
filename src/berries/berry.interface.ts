import { GenericPayload } from 'src/interfaces/generic.interface';

export interface BerryFlavor {
  flavor: GenericPayload;
  potency: number;
}

export interface BerryDetail {
  id: number;
  name: string;
  firmness: GenericPayload;
  flavors: BerryFlavor[];
  growth_time: number;
  item: GenericPayload;
  max_harvest: number;
  natural_gift_type: GenericPayload;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
}
