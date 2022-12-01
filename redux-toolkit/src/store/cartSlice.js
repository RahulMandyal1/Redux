import { createSlice } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.cart.find((product) => product.id === action.payload.id)) {
        const allProducts = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        });

        state.cart = allProducts;
      } else {
        const product = { ...action.payload };
        product.quantity = 1;
        state.cart = [...state.cart, product];
      }
    },

    removeProduct(state, action) {
      const allProducts = state.cart.filter(
        (product) => !product.id === payload.id
      );

      state.cart = allProducts;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeProduct } = cartSlice.actions;
