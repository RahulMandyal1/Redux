import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  allProducts: productsReducer,
  selectedProduct: selectedProductReducer
});
