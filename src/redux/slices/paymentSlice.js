import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payment: null, // Store the current payment information
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    // Set the current payment information
    setPayment: (state, action) => {
      state.payment = action.payload;
    },

    // Clear the current payment information (e.g., after successful payment)
    clearPayment: (state) => {
      state.payment = null;
    },

    // Payment processing related actions (assuming separate actions)
    paymentRequest: (state) => {
      state.loading = true;
    },
    paymentSuccess: (state, action) => {
      state.loading = false;
      state.payment = action.payload; // Update payment info after success (optional)
    },
    paymentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setPayment,
  clearPayment,
  paymentRequest,
  paymentSuccess,
  paymentFailure,
} = paymentSlice.actions;

export default paymentSlice.reducer;
