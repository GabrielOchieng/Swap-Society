import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Fetch all products
    fetchProductsRequest: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch products for a specific user
    fetchUserProductsRequest: (state) => {
      state.loading = true;
    },
    fetchUserProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchUserProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create a product
    createProductRequest: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.products.push(action.payload); // Add the newly created product to the state
    },
    createProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update a product (assuming an updateProduct action is defined)
    updateProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = action.payload;
      }
    },

    // Delete a product (assuming a deleteProduct action is defined)
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchUserProductsRequest,
  fetchUserProductsSuccess,
  fetchUserProductsFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
