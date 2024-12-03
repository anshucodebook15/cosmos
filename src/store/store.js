import { configureStore } from "@reduxjs/toolkit";
import { LandingReducer } from "../pages/Landing/LandingSlice";

export const store = configureStore({
  reducer: {
    landing: LandingReducer,
  },
});
