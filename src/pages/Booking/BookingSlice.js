import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

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
      console.log(current(state.seats));

      //  copy the object
      let updatedSeats = [
        ...state.seats.map((item) =>
          item.areaID === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      ];

      state.seats = updatedSeats;

      console.log("state update eq", action.payload);
    },
    addorSubTicket: (state, action) => {
      const { sign, area, count } = action.payload;

      if (sign === "+") {
        let updatedSeats = [
          ...state.seats.map((item) =>
            item.areaID === area ? { ...item, count: item.count + 1 } : item
          ),
        ];

        state.seats = updatedSeats;
      } else if (sign === "-" && count > 0) {
        let updatedSeats = [
          ...state.seats.map((item) =>
            item.areaID === area ? { ...item, count: item.count - 1 } : item
          ),
        ];

        state.seats = updatedSeats;
      }
    },
    checkoutTotalandTickects: (state, action) => {
      let totalTicket = 0;
      let totalPrice = 0;

      // Calculate total Price and total ticket
      state.seats.map((item) => {
        totalTicket = totalTicket + item.count;
        totalPrice = totalPrice + item.count * item.price;
      });

      let newDataSet = [...state.seats]

      //  Price and Ticket
      state.total.price = totalPrice;
      state.total.tickects = totalTicket

      console.log("Total Ticket", totalTicket);
      console.log("Total price", totalPrice);
      
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
export const { addSingleTicket, addorSubTicket, checkoutTotalandTickects } = BookingSlice.actions;
export const SelectBooking = (store) => store.booking;
export const BookingReducer = BookingSlice.reducer;
