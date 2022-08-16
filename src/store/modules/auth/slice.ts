import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
});

// actions
export const { setUserInfo } = authSlice.actions;

// selectors
export const isAuthChecked = (state) => state.auth.isAuthChecked;

// default reducer
export const auth = authSlice.reducer;
