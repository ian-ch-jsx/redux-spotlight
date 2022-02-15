import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  multiply,
  reset,
  DarkMode,
} from './counterSlice';
import './Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.counter.isDarkMode);
  console.log(isDarkMode);
  return (
    <div className={isDarkMode ? 'dark' : 'day'}>
      <button onClick={() => dispatch(DarkMode())}>darkmode</button>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="Multiply value"
        onClick={() => {
          dispatch(multiply());
        }}
      >
        x
      </button>
      <button
        aria-label="Reset"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
