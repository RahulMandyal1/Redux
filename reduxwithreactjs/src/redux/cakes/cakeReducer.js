import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - payload,
      };
    default: return state;
  }
};


export default cakeReducer;