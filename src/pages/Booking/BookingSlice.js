import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const BaseURL = "http://localhost:3000/";

const API = axios.create({
  baseURL: BaseURL,
});

// const initialState = {
//   value: 0,
// };

const initialState = {
  seats: [],
  bookings: [],
  total: {
    price: 0,
    tickects: 0,
    gst: 0,
  },
  status: "idle",
  error: "",
};

export const fetchSeats = createAsyncThunk("fetch/seats", async () => {
  try {
    let response = await API.get("seats");
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue("error occured");
  }
});

export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addSingleTicket: (state, action) => {

      let newdatastate = [...state.seats].map((item) =>
        item.area === ticketdata.area
          ? { ...item, count: item.count + 1 }
          : item
      );

      state.bookings = newdatastate;
      // setBuytickets(newdatastate);
    },

    
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSeats.pending, (state, action) => {
      state.status = "pending";
      console.log(state);
    });
    builder.addCase(fetchSeats.fulfilled, (state, action) => {
      state.status = "success";
      state.seats = action.payload;
      console.log("actiondata", action.payload);
    });
    builder.addCase(fetchSeats.rejected, (state, action) => {
      state.status = "failed";
      state.error = "Something Went Wrong";
      console.log("error Rejected successfully");

      // console.log(state);
    });
  },
});

// Action creators are generated for each case reducer function
export const { addSingleTicket, increment, decrement, incrementByAmount } = BookingSlice.actions;
export const SelectBooking = (store) => store.booking;
export const BookingReducer = BookingSlice.reducer;
