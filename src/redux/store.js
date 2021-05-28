import { configureStore } from "@reduxjs/toolkit";
import StorageService from "../services/storage.service";
import authReducer from "./slices/auth";

const preloadedState = {
  auth: StorageService.getItem("auth") || undefined,
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

export default store;
