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
} from './constants';
import {
  FetchingAllHeroRequest,
  FetchingAllHeroSuccess,
  FetchingAllHeroFailure,
  FetchingHeroProfileRequest,
  FetchingHeroProfileSuccess,
  FetchingHeroProfileFailure,
  HeroItem,
  HeroProfile,
} from '../types/heros';
import { Dispatch } from 'redux';
import axios from 'axios';

export function plusAbility(key: string) {
  return {
    key,
    type: PLUS_ABILITY_STATUS,
  };
}

export function minusAbility(key: string) {
  return {
    key,
    type: MINUS_ABILITY_STATUS,
  };
}

function fetchingAllHerosRequest(): FetchingAllHeroRequest {
  return {
    type: FETCHING_ALL_HEROS_REQUEST,
  };
}

function fetchingAllHerosSuccess(payload: HeroItem[]): FetchingAllHeroSuccess {
  return {
    payload,
    type: FETCHING_ALL_HEROS_SUCCESS,
  };
}

function fetchingAllHerosFailure(err: any): FetchingAllHeroFailure {
  return {
    err,
    type: FETCHING_ALL_HEROS_FAILURE,
  };
}

export function fetchingAllHeros() {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(fetchingAllHerosRequest());
    try {
      const result = await axios.get(
        'http://hahow-recruit.herokuapp.com/heroes',
      );
      if (result.status === 200) {
        dispatch(fetchingAllHerosSuccess(result.data));
      } else {
        fetchingAllHerosFailure(result);
      }
      return result;
    } catch (e) {
      fetchingAllHerosFailure(e);
      return e;
    }
  };
}

function fetchingHeroProfileRequest(
  id: string | number,
): FetchingHeroProfileRequest {
  return {
    id,
    type: FETCHING_HERO_PROFILE_REQUEST,
  };
}

function fetchingHeroProfileSuccess(
  payload: HeroProfile,
): FetchingHeroProfileSuccess {
  return {
    payload,
    type: FETCHING_HERO_PROFILE_SUCCESS,
  };
}

function fetchingHeroProfileFailure(err: any): FetchingHeroProfileFailure {
  return {
    err,
    type: FETCHING_HERO_PROFILE_FAILURE,
  };
}

export function fetchingHeroProfile(id: string | number) {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(fetchingHeroProfileRequest(id));

    try {
      const result = await axios.get(
        `http://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
      );
      if (result.status === 200) {
        const data = {
          ...result.data,
          id,
        };

        dispatch(fetchingHeroProfileSuccess(data));
      } else {
        fetchingHeroProfileFailure(result);
      }
      return result;
    } catch (e) {
      fetchingHeroProfileFailure(e);
      return e;
    }
  };
}

function updateHeroProfileRequest() {
  return {
    type: UPDATE_HERO_PROFILE_REQUEST,
  };
}

function updateHeroProfileSuccess() {
  return {
    type: UPDATE_HERO_PROFILE_SUCCESS,
  };
}

function updateHeroProfileFailure(err: any) {
  return {
    err,
    type: UPDATE_HERO_PROFILE_FAILURE,
  };
}

export function updateHeroProfile(id: string | number, data: HeroProfile) {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(updateHeroProfileRequest());
    try {
      const result = await axios.patch(
        `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
        data,
      );
      if (result.status === 200) {
        dispatch(updateHeroProfileSuccess());
      } else {
        updateHeroProfileFailure(result);
      }
      return result;
    } catch (e) {
      updateHeroProfileFailure(e);
      return e;
    }
  };
}
