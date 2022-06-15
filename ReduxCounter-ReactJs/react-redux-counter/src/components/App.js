import React from "react";
import { connect } from "react-redux";
function App(props) {
  function handleIncrement() {
    props.dispatch({
      type: "increment",
    });
  }

  function handleDecrement() {
    props.dispatch({
      type: "decrement",
    });
  }

  function handleReset() {
    props.dispatch({
      type: "reset",
    });
  }

  return (
    <div className="container">
      <h1 className="count">{props.count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

function getCount(state) {
  return {
    count: state.value,
  };
}
export default connect(getCount)(App);
