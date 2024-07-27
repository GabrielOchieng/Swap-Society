import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000",
  baseUrl: "https://swap-society-api.onrender.com",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api", // Optional reducer path for easier identification
  baseQuery,
  tagTypes: ["User", "Product", "Order", "Payment"], // Tag type for user data
  endpoints: (builder) => ({}),
});
