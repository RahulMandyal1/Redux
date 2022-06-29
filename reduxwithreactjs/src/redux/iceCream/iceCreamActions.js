import { BUY_ICE_CREAM } from "./iceCreamType";
const initialState = {
  numberofIcecream: 20,
};
const iceCreamReducer = (state = initialState, { type , payload }) => {
  switch (type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberofIcecream: state.numberofIcecream- 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
