import { createSlice } from "@reduxjs/toolkit";

export const configurationUserSlice = createSlice({
  name: "setUpUser",
  initialState: {
    initUser: {
      userInfo: null,
      inscription: null,
      level: null,
      program: null,
      subscription: null,
    },
  },
  reducers: {
    getUser: (state, action) => {
      state.initUser = {
        userInfo: action.payload?.userInfo,
        inscription: action.payload?.inscription || null,
        level: action.payload?.level || null,
        program: action.payload?.program || null,
        subscription: action.payload?.subscription || null,
      };
    },
  },
});
