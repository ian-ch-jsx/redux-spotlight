import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    // name the piece of state and give it the reducer to use 
    counter: counterReducer,
  },
});
