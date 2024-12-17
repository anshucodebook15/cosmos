import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

// export const BaseURL = "https://cosmos-be.vercel.app/";
export const COSBaseURL = "https://cosmos-be.vercel.app/";
// export const COSBaseURL = "http://localhost:3000/";

const API = axios.create({
  baseURL: COSBaseURL,
});

const api_endpoints = {
  payment: {
    create_order: "payments/genorder",
  },
};

const api_actions = {
  payment: {
    fetch_create_order: "fetch/createorder",
  },
};

const initialState = {
  name: "",
  mobile: "",
  email: "",
  payment_session_id: "",
  seats: [],
  total: {
    price: 0,
    finalprice: 0,
    tickets: 0,
    gst: 18,
    convenience_fee: 0,
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

export const fetchOrder = createAsyncThunk(
  api_actions.payment.fetch_create_order,
  async (data) => {
    try {
      let response = await API.post(api_endpoints.payment.create_order, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("error occured");
    }
  }
);

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
      let finalPriceAfterConfee = 0;

      // Calculate total Price and total ticket
      state.seats.map((item) => {
        totalTicket = totalTicket + item.count;
        totalPrice = totalPrice + item.count * item.price;
      });

      state.total.tickets = totalTicket;
      state.total.price = totalPrice;
      state.total.convenience_fee = totalPrice * 0.02;
      state.total.finalprice = state.total.price + state.total.convenience_fee;
    },
    addCheckoutDetails: (state, action) => {
      // Add Name, Mobile, Email to send ticket

      state[action.payload.name] = action.payload.value;

      // console.log("action details", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSeats.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchSeats.fulfilled, (state, action) => {
      state.status = "success";
      state.seats = action.payload;
    });
    builder.addCase(fetchSeats.rejected, (state, action) => {
      state.status = "failed";
      state.error = "Something Went Wrong";
    });

    // *************************************** Payment portal

    builder.addCase(fetchOrder.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.status = "success";
      state.payment_session_id = action.payload.message;

      console.log("see Payload", action.payload);
    });
    builder.addCase(fetchOrder.rejected, (state, action) => {
      state.status = "failed";
      state.error = "Something Went Wrong";
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addSingleTicket,
  addorSubTicket,
  checkoutTotalandTickects,
  addCheckoutDetails,
} = BookingSlice.actions;
export const SelectBooking = (store) => store.booking;
export const BookingReducer = BookingSlice.reducer;
