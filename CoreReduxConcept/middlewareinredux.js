const Redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddelware = Redux.applyMiddleware;

// function that will call once inside dispath will dispath   the action mutate the state
const Increment = () => {
  return {
    type: "Increment",
    payload: "it will increment it by one ",
  };
};
// decrement value by one
const decrement = () => {
  return {
    type: "decrement",
    payload: "it will decrement the counte value by one ",
  };
};
// Reset our counter value
const reset = () => {
  return {
    type: "reset",
    payload: "it will reset our counter value to zero ",
  };
};

const counterInitialState = { counter: 0 };
const counterReducer = (state = counterInitialState, { type, payload }) => {
  switch (type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "reset":
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(counterReducer, applyMiddelware(logger));
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());
store.subscribe(() => {});



// Middlewares is the suggested way to Extend Redux with custom functionality
// Provides a third party Extension point  between dispatching  action 
// Used middlewares for  logging and asynchronous task 
