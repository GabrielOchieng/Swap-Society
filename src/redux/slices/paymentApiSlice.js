import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://swap-society-api.onrender.com", // Replace with your API base URL
  // baseUrl: "http://localhost:5000", // Replace with your API base URL
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const paymentApiSlice = createApi({
  reducerPath: "paymentApi",
  baseQuery,
  endpoints: (builder) => ({
    // Initiate payment process on the server-side
    initiatePayment: builder.mutation({
      query: (data) => ({
        url: "/payments/initiate",
        method: "POST",
        body: data, // This should include order details, not credit card info
      }),
    }),

    // Confirm payment status after processing on the server-side (optional)
    confirmPayment: builder.mutation({
      query: (paymentId) => ({
        url: `/payments/${paymentId}/confirm`,
        method: "GET",
      }),
    }),
  }),
});

export const { useInitiatePaymentMutation, useConfirmPaymentMutation } =
  paymentApiSlice;
