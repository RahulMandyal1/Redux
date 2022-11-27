import { ActionTypes } from "../constant/action-types";

export const setProducts = (payload) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: payload
  };
};

export const setSelectedProduct = (payload) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: payload
  };
};

export const fetchAllProducts = () => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products");
  const json = await data.json();
  dispatch(setProducts(json));
};

export const fetchSingleProduct = (productId) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const jsonData = await data.json();
  dispatch(setSelectedProduct(jsonData));
};
