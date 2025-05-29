import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter_slice",
  initialState: initialState,
  reducers: {
    incrementCounter: state => {
      state.value += 1;
    },
    decrementCounter: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {incrementCounter, decrementCounter} = counterSlice.actions;

export default counterSlice;
