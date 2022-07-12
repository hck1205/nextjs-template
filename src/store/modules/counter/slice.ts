import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TStoreCounter } from './types';

export const name: string = 'counter';

const initialState: TStoreCounter = {
  value: 0,
};
const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseByRandom: {
      reducer: (state, action: PayloadAction<number>) => {
        state.value -= action.payload;
      },
      prepare: () => {
        return {
          payload: Math.random() * 100,
        };
      },
    },
  },
});

export const { increment, decrement, increaseByAmount, decreaseByRandom } =
  counterSlice.actions;

export default counterSlice.reducer;
