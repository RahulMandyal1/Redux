import { ActionTypes } from "../constant/action-types";

const initialState = {
  products: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { products: action.payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { product: action.payload };

    default:
      return state;
  }
};
