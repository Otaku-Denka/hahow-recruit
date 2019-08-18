import { HerosActionsTypes, HeroState } from '../types/heros';
import {
  FETCHING_ALL_HEROS_REQUEST,
  FETCHING_ALL_HEROS_SUCCESS,
  FETCHING_ALL_HEROS_FAILURE,
  FETCHING_HERO_PROFILE_REQUEST,
  FETCHING_HERO_PROFILE_SUCCESS,
  FETCHING_HERO_PROFILE_FAILURE,
  PLUS_ABILITY_STATUS,
  MINUS_ABILITY_STATUS,
  UPDATE_HERO_PROFILE_REQUEST,
  UPDATE_HERO_PROFILE_SUCCESS,
  UPDATE_HERO_PROFILE_FAILURE,
} from '../actions/constants';

export const heroInitialState: HeroState = {
  isFetching: false,
  heros: [],
  totalAbility: 0,
  heroProfile: {
    id: '',
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
  err: '',
};

export default function heros(
  state: HeroState = heroInitialState,
  action: HerosActionsTypes,
): HeroState {
  switch (action.type) {
    case FETCHING_ALL_HEROS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_ALL_HEROS_SUCCESS:
      return { ...state, isFetching: false, heros: action.payload };
    case FETCHING_ALL_HEROS_FAILURE:
      return { ...state, isFetching: false };
    case FETCHING_HERO_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        heroProfile: { ...state.heroProfile, id: action.id },
        totalAbility: 0,
      };
    case FETCHING_HERO_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        heroProfile: action.payload,
        totalAbility: 0,
      };
    case FETCHING_HERO_PROFILE_FAILURE:
      return { ...state, isFetching: false, totalAbility: 0 };
    case PLUS_ABILITY_STATUS:
      return {
        ...state,
        heroProfile: {
          ...state.heroProfile,
          [action.key]: +state.heroProfile[action.key] + 1,
        },
        totalAbility: state.totalAbility - 1,
      };
    case MINUS_ABILITY_STATUS:
      return {
        ...state,
        heroProfile: {
          ...state.heroProfile,
          [action.key]: +state.heroProfile[action.key] - 1,
        },
        totalAbility: state.totalAbility + 1,
      };
    case UPDATE_HERO_PROFILE_REQUEST:
      return { ...state, isFetching: true };
    case UPDATE_HERO_PROFILE_SUCCESS:
      return { ...state, isFetching: false };
    case UPDATE_HERO_PROFILE_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
