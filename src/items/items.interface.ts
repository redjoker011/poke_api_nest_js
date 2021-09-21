import { GenericPayload } from 'src/interfaces/generic.interface';

interface ItemEffectiveEntry {
  effect: string;
  language: GenericPayload;
  short_effect: string;
}

interface ItemFlavorEntry {
  language: GenericPayload;
  text: string;
  version_group: GenericPayload;
}

interface ItemGameIndex {
  game_index: number;
  generation: GenericPayload;
}

interface ItemName {
  language: GenericPayload;
  name: string;
}

interface ItemHeldByPokemon {
  rarity: number;
  version: GenericPayload;
}

interface MachineVersionDetail {
  machine: GenericPayload[];
  version_group: GenericPayload;
}

interface Sprite {
  default: string;
}

export interface ItemDetail {
  id: number;
  name: string;
  attributes: GenericPayload[];
  baby_trigger_for: string | null;
  category: GenericPayload;
  cost: number;
  effective_entries: ItemEffectiveEntry;
  flavor_text_entries: ItemFlavorEntry[];
  fling_effect: string | null;
  fling_power: string | null;
  game_indices: ItemGameIndex[];
  names: ItemName[];
  held_by_pokemon: ItemHeldByPokemon[];
  machines: MachineVersionDetail[];
  sprites: Sprite;
}
