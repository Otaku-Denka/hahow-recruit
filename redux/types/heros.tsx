export type HerosActionsTypes = any;

export interface HeroItem {
  id: number | string;
  name: string;
  image: string;
}

export interface HeroProfile {
  id?: number | string;
  str: number;
  int: number;
  agi: number;
  luk: number;
}

export interface HeroState {
  isFetching: boolean;
  heros: HeroItem[];
  heroProfile: HeroProfile;
}
