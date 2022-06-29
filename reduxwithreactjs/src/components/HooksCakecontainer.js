import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { buyCake } from '../redux';

function HooksCakecontainer() {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
    <h2>this is implemented with the hooks</h2>
      <h2>Number of cakes {numberOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakecontainer;