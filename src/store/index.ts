import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewsGrid: true,
  newsCount: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    newsViewChange(state) {
      state.isNewsGrid = !state.isNewsGrid;
    },
    newsCountUpdate(state, action) {
      state.newsCount = action.payload;
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const { newsViewChange, newsCountUpdate } = appSlice.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
