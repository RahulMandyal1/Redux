import { createStore } from "redux";
import cakeReducer from "./cakeReducer";

let store = createStore(cakeReducer);
export default store;
