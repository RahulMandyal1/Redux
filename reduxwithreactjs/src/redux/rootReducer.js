import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamActions";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer;