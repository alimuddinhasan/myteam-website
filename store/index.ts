import { configureStore } from "@reduxjs/toolkit";
import triviaSlice from "./trivia/triviaSlice";

export const store = configureStore({
  reducer: {
    trivia: triviaSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export const actions = counterSlice.actions;
// export default store;
