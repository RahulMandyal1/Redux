import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // it works like switch case statement
    builder.addCase(fetchProductsData.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });

    // when data is fetch and promise is fullfilled
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });

    //promise is rejected data is not fetched or if there is an error
    builder.addCase(fetchProductsData.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

// export const { setProducts, setStatus } = productSlice.actions;
//export redcuer from here
export default productSlice.reducer;

// create Async Thunk middleware function
export const fetchProductsData = createAsyncThunk(
  "products/fetch",
  async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    return await data.json();
  }
);

//get the products data  with the help of thunk  || thunk is inbuild  in
//redux toolkit so we do not need to add thunk middleware externally
// export const fetchProductsData = () => async (dispatch) => {
//   try {
//     dispatch(setStatus(STATUSES.LOADING));
//     const data = await fetch(`https://fakestoreapi.com/products`);
//     const jsonData = await data.json();
//     dispatch(setProducts(jsonData));
//     dispatch(setStatus(STATUSES.IDLE));
//   } catch (err) {
//     dispatch(setStatus(STATUSES.ERROR));
//   }
// };
