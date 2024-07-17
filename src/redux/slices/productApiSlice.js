import { apiSlice } from "./apiSlice";

const PRODUCTS_URL = "http://localhost:5000/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query({
      query: () => `${PRODUCTS_URL}`,
    }),

    // Get a specific product by ID
    getProductById: builder.query({
      query: (id) => `${PRODUCTS_URL}/${id}`,
    }),

    // Create a new product
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"], // Invalidate all products tag on creation
    }),

    // Update an existing product
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data._id}`, // Use ID from data
        method: "PUT",
        body: data, // Include all relevant product data for update
      }),
      invalidatesTags: (result) => (result ? ["Product", result.id] : []), // Invalidate product and specific product tag
    }),

    // Delete a product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (id) => (id ? ["Product", id] : ["Product"]), // Invalidate product and specific product tag (or all products)
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
