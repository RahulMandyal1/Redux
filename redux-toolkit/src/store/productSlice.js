import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
//export redcuer from here
export default productSlice.reducer;

//get the products data  with the help of thunk  || thunk is inbuild  in
//redux toolkit so we do not need to add thunk middleware externally
export const fetchProductsData = () => async (dispatch) => {
  try {
    dispatch(setStatus(STATUSES.LOADING));
    const data = await fetch(`https://fakestoreapi.com/products`);
    const jsonData = await data.json();
    dispatch(setProducts(jsonData));
    dispatch(setStatus(STATUSES.IDLE));
  } catch (err) {
    dispatch(setStatus(STATUSES.ERROR));
  }
};
