import {
  FETCHING_ALL_HEROS_REQUEST,
  FETCHING_ALL_HEROS_SUCCESS,
  FETCHING_ALL_HEROS_FAILURE,
  FETCHING_HERO_PROFILE_REQUEST,
  FETCHING_HERO_PROFILE_SUCCESS,
  FETCHING_HERO_PROFILE_FAILURE,
} from '../actions/constants';
import { Action } from 'redux';

export type HerosActionsTypes = any;

export interface HeroItem {
  id: number | string;
  name: string;
  image: string;
}

export interface HeroProfile {
  id: string | number;
  str: number;
  int: number;
  agi: number;
  luk: number;
  [key: string]: string | number;
}

export interface HeroState {
  isFetching: boolean;
  heros: HeroItem[];
  heroProfile: HeroProfile;
  totalAbility: number;
  err: any;
}

export interface FetchingAllHeroRequest extends Action {
  type: typeof FETCHING_ALL_HEROS_REQUEST;
}

export interface FetchingAllHeroSuccess extends Action {
  type: typeof FETCHING_ALL_HEROS_SUCCESS;
  payload: HeroItem[];
}

export interface FetchingAllHeroFailure extends Action {
  type: typeof FETCHING_ALL_HEROS_FAILURE;
  err: any;
}

export interface FetchingHeroProfileRequest extends Action {
  type: typeof FETCHING_HERO_PROFILE_REQUEST;
  id: string | number;
}

export interface FetchingHeroProfileSuccess extends Action {
  type: typeof FETCHING_HERO_PROFILE_SUCCESS;
  payload: HeroProfile;
}

export interface FetchingHeroProfileFailure extends Action {
  type: typeof FETCHING_HERO_PROFILE_FAILURE;
  err: any;
}

export type HeroActions =
  | FetchingAllHeroRequest
  | FetchingAllHeroSuccess
  | FetchingAllHeroFailure
  | FetchingHeroProfileRequest
  | FetchingHeroProfileSuccess
  | FetchingHeroProfileFailure;
