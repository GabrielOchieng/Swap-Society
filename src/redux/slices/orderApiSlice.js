import { apiSlice } from "./apiSlice";

const ORDERS_URL = "https://swap-society-api.onrender.com/orders";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all orders for the authenticated user (assuming user ID from auth)
    getOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/myorders`, // Assuming an endpoint for user orders
        // Include authorization headers or access token in request if needed
      }),
    }),

    // Get a specific order by ID
    getOrderById: builder.query({
      query: (id) => `${ORDERS_URL}/${id}`,
    }),

    // Create a new order
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    // Update an existing order (assuming specific logic for updating)
    updateOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDERS_URL}/${data._id}`, // Use ID from data
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result) => (result ? ["Order", result.id] : []), // Invalidate order and specific order tag
    }),
  }),
});

export const {
  useGetOrdersQuery,
  getOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
} = orderApiSlice;
