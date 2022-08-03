import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addBy: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    reduceBy: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addBy, reduceBy } = counterSlice.actions;

export default counterSlice.reducer;
