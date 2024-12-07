import { configureStore } from "@reduxjs/toolkit";
import { LandingReducer } from "../pages/Landing/LandingSlice";
import { BookingReducer } from "../pages/Booking/BookingSlice";

export const store = configureStore({
  reducer: {
    landing: LandingReducer,
    booking: BookingReducer,
  },
});
