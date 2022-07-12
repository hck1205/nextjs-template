import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import extraReducers from './extraReducers';
import { TStoreAuth } from './types';

const initialState: TStoreAuth = {
  userInfo: {
    email: '',
    nickname: '',
  },
  error: '',
  isLoading: false,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
  extraReducers,
});

// actions
export const { setUserInfo } = authSlice.actions;

// selectors
export const isAuthChecked = (state) => state.auth.isAuthChecked;

// default reducer
export const auth = authSlice.reducer;
