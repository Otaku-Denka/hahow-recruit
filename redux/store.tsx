import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import heros, { heroInitialState } from './reducers/heros';
import { HeroState } from './types/heros';

export interface ReducersState {
  heros: HeroState;
}

const reducers = combineReducers({
  heros,
});

const initialState: ReducersState = {
  heros: heroInitialState,
};

export const initStore = (state: ReducersState = initialState) => {
  return createStore(
    reducers,
    state,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(thunkMiddleware)
      : composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
