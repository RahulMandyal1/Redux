const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
let counter = document.querySelector(".counter");
let store = Redux.createStore(reducer);
let count = store.getState();
let totalCount= 0;

increment.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
  totalCount = store.getState();
  counter.innerText =totalCount;
});

decrement.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
  totalCount = store.getState();
  counter.innerText = totalCount;
});

reset.addEventListener("click", () => {
  store.dispatch({
    type: "reset",
  });
  totalCount= store.getState();
  counter.innerText = totalCount;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + (action.step || 1);
      break;
    case "decrement":
      return state - (action.step || 1);
      break;
    case "reset":
      return 0;
      break;
  }
}
