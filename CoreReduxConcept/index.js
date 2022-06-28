const Redux = require("redux");

// function  to be dispatched we will dispatch this function and it will mutate our state
const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    payload: "this will only decrese the cake by one ",
  };
}

const ICE_CREAM = "ICE_CREAM";
function buyIceCream() {
  return {
    type:ICE_CREAM,
    payload: "this will only decrese the ice cream  by one ",
  };
}

let initialState = { numberOfCakes: 10, numberOfIcecream: 20 };
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case "ICE_CREAM":
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
    default:
      return state;
  }
}

//store where all these  data are being stored in  the  predictable container

const store = Redux.createStore(reducer);

//initial state is
console.log("This is the initial state", store.getState());

//it will run only when when we have  change in the state o
store.subscribe(() =>
  console.log("this is the updated state ", store.getState())
);

// // dispatch and action from  here
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
