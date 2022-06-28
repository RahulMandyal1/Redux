const Redux = require("redux");
const combineReducers = Redux.combineReducers;

//function that once dispatched will mutate our state
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
    type: ICE_CREAM,
    payload: "this will only decrese the ice cream  by one ",
  };
}

//initial states of the multiple reducers
let iceCreamInitialState = {
  numberOfIceCream: 10,
};

let cakeInitialState = {
  numberOfCakes: 20,
};

// Ice cream  reducer
const IceCreamReducer = (state = iceCreamInitialState , { type, payload }) => {
  switch (type) {
    case "ICE_CREAM":
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

// cake reducer
const cakeReducer = (state = cakeInitialState, { type, payload }) => {
  switch (type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
  });


const store = Redux.createStore(rootReducer);
console.log(store);

//it wil first print   the inital state
console.log("This is the initial state", store.getState());

//it will run only when when there is a change in the state
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
