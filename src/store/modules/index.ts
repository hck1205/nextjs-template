import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

import { counter, TStoreCounter } from './counter';
import { auth, TStoreAuth } from './auth';

type RootStates = {
  counter: TStoreCounter;
  auth: TStoreAuth;
};

const rootReducer = (
  state: RootStates,
  action: AnyAction
): CombinedState<RootStates> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combineReducers({ counter, auth })(state, action);
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
