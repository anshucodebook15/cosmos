import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";
import { COSBaseURL } from "../../api/API";

// export const COSBaseURL = "https://be.dunesofcosmos.com/";
// export const COSBaseURL = "http://localhost:3001/";

const API = axios.create({
  baseURL: COSBaseURL,
});

const api_endpoints = {
  payment: {
    create_order: "payments/genorder",
    check_refer_code: "refer/check",
  },
};

const api_actions = {
  payment: {
    fetch_create_order: "fetch/createorder",
    fetch_refer_code: "fetch/refercode",
  },
};

const initialState = {
  name: "",
  mobile: "",
  email: "",
  payment_session_id: "",
  refer_code: "",
  discount_of: 0,
  refer_code_status: "",
  refer_code_error: "",
  seats: [],
  total: {
    discount_cost: 0,
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
      return response.data;
    } catch (error) {
      return rejectWithValue("error occured");
    }
  }
);

export const fetchReferCode = createAsyncThunk(
  api_actions.payment.fetch_refer_code,
  async (data) => {
    try {
      let response = await API.post(
        api_endpoints.payment.check_refer_code,
        data
      );

      console.log("response");

      return response.data;
    } catch (error) {
      console.log("error", error);

      return rejectWithValue("error occured");
    }
  }
);

export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addSingleTicket: (state, action) => {
      //  copy the object
      let updatedSeats = [
        ...state.seats.map((item) =>
          item.areaID === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      ];

      state.seats = updatedSeats;
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

      // Calculate total price and total ticket
      state.total.tickets = totalTicket;
      state.total.price = totalPrice;
      state.total.convenience_fee = totalPrice * 0.02;



      // Calculate
      if (parseInt(state.discount_of) === 0) {
        state.total.finalprice =
          state.total.price + state.total.convenience_fee;
      } else if (parseInt(state.discount_of) > 0) {
        let discountCost =
          (state.total.price + state.total.convenience_fee) *
          (parseInt(state.discount_of) / 100);

        console.log("discountCost", discountCost);

        state.total.discount_cost = discountCost;

        state.total.finalprice =
          state.total.price + state.total.convenience_fee - discountCost;
      }

      // calculate



    },

    addCheckoutDetails: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    checkReferCode: (state, action) => {
      // state[action.payload.name] = action.payload.value;
    },
    clearAppState: (state, action) => {
      return (state = initialState);
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
    });
    builder.addCase(fetchOrder.rejected, (state, action) => {
      state.status = "failed";
      state.error = "Something Went Wrong";
    });

    // **************************************************

    builder.addCase(fetchReferCode.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchReferCode.fulfilled, (state, action) => {
      state.status = "success";
      state.refer_code_error = "";
      state.refer_code = action.payload.message.refer_code;
      state.discount_of = action.payload.message.refer_discount;
      state.refer_code_status = "ACTIVE";
    });
    builder.addCase(fetchReferCode.rejected, (state, action) => {
      state.status = "failed";
      state.refer_code_error = "Invalid Refer Code !";
      state.refer_code_status = "";
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addSingleTicket,
  addorSubTicket,
  checkoutTotalandTickects,
  addCheckoutDetails,
  clearAppState,
  checkReferCode,
} = BookingSlice.actions;
export const SelectBooking = (store) => store.booking;
export const BookingReducer = BookingSlice.reducer;
