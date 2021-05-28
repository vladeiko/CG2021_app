import { createSlice } from "@reduxjs/toolkit";
import storage from "../../services/storage.service";

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, access_token: null, isAuthorized: false },
  reducers: {
    setSessionData: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      if (state.user && state.access_token) state.isAuthorized = true;
      storage.setItem("auth", state);
    },
    extraReducers: {},
  },
});

export const { setSessionData } = authSlice.actions;

export default authSlice.reducer;
