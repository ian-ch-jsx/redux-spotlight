import { createSlice } from '@reduxjs/toolkit';

const initialCount = {
  count: 0,
  DarkMode: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCount,
  // defines the ways our slice will update our state
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure
      // immutable data

      //This is describing the mutation to the state
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply: (state) => {
      state.count *= 2;
    },
    reset: (state) => {
      state.count = 0;
    },
    DarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { increment, decrement, multiply, reset, DarkMode } =
  counterSlice.actions;

//Export the reducer function from the slice
export default counterSlice.reducer;
