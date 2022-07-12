import * as R from 'ramda';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn } from '@/API';

import { setUserInfo } from './slice';
import { SignUpInfo } from './types';

const pathToError = R.path(['response', 'data', 'code']);

export const register = createAsyncThunk(
  `auth/register`,
  async (signUpInfo: SignUpInfo, { getState, rejectWithValue, dispatch }) => {
    try {
      const { data } = await signUp(signUpInfo);

      if (data.status === 'completed') {
        const signInInfo = R.pick(['email', 'password'], signUpInfo);
        const { data: user } = await signIn(signInInfo);

        return user;
      }
    } catch (e) {
      return rejectWithValue(pathToError(e));
    }
  }
);
