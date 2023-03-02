import { configureStore } from "@reduxjs/toolkit";
import { configurationUserSlice } from "./slices/configuration";

export const store = configureStore({
  reducer: {
    setInitUser: configurationUserSlice.reducer,
  },
});
