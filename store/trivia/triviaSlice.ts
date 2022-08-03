import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INumberTrivia } from "domain/model/numberTrivia.model";

export interface TriviaState {
  number: number | null;
  trivia: string | null;
}

const initialState: TriviaState = {
  number: null,
  trivia: null,
};

const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    updateTrivia: (state, action) => {
      console.log(action);
      state.number = action.payload.number;
      state.trivia = action.payload.trivia;
    },
  },
});

export const { updateTrivia } = triviaSlice.actions;

export default triviaSlice.reducer;
