import { HerosActionsTypes, HeroState } from '../types/heros';

export const heroInitialState: HeroState = {
  isFetching: false,
  heros: [],
  heroProfile: {
    id: '',
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
};

export default function heros(
  state: HeroState = heroInitialState,
  action: HerosActionsTypes,
): HeroState {
  switch (action.type) {
    default:
      return state;
  }
}
