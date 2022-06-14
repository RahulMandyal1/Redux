const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const h1  = document.querySelector("h1");
let counter = h1.innerText;
let store = Redux.createStore(reducer);
let count = store.getState();
counter.innerText = counter;

increment.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrement.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});

reset.addEventListener("click", () => {
  store.dispatch({
    type: "reset",
  });
});

store.subscribe(()=>{
  counter = store.getState();
  h1.innerText = counter;
})

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
