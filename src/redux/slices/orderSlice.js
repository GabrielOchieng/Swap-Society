import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Fetch all orders
    fetchOrdersRequest: (state) => {
      state.loading = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create a new order
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders.push(action.payload); // Add the newly created order to the state
    },
    createOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update an order (assuming an updateOrder action is defined)
    updateOrder: (state, action) => {
      const orderIndex = state.orders.findIndex(
        (order) => order._id === action.payload._id
      );
      if (orderIndex !== -1) {
        state.orders[orderIndex] = action.payload;
      }
    },

    // Delete an order (assuming a deleteOrder action is defined)
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});

export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
  updateOrder,
  deleteOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
