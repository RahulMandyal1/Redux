import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useState } from "react";

function Cakecontainer(props) {
  let [numberOfCake, setNumberofCake] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={numberOfCake}
        onChange={(e) => setNumberofCake(e.target.value)}
      />
      <h2>Number of cakes {props.numberOfCakes}</h2>
      <button onClick={() => props.buyCake(numberOfCake)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state ,ownProps) => {
  const itemState = ownProps.cake  ?  state.iceCream.numberofIcecream : state.cake.numberOfCakes;
  return {
    numberOfCakes: itemState,
  };
};


// const mapStateToProps = (state) => {
//   return {
//     numberOfCakes:  state.cake.numberOfCakes,
//   };
// };


const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
