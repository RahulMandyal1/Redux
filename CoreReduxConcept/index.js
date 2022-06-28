const Redux = require("redux");

// function  to be dispatched we will dispatch this function and it will mutate our state
const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: "BUY_CAKE",
    payload: "this will only decrese the cake by one ",
  };
}

let initialState = { numberOfCakes: 10 };
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
}

//store where all these  data are being stored in  the  predictable container

const store = Redux.createStore(reducer);

//initial state is
console.log("This is the initial state", store.getState());
store.subscribe(() =>
  console.log("this is the updated state ", store.getState())
);

// // dispatch and action from  here
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

