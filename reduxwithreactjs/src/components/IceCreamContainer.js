import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { buyIcecream } from '../redux/iceCream/iceCreamReducer'

function IceCreamContainer() {
    let  numberofIcecream = useSelector(state=> state.iceCream.numberofIcecream);
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Number of ice creams{numberofIcecream}</h2>
          <button onClick={()=> dispatch(buyIcecream())}>Buy icecream</button>
        </div>
      )
}

export default IceCreamContainer;