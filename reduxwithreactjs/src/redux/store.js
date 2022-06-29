import { createStore } from "redux";
import rootReducer from "./rootReducer";
console.log(rootReducer);
let store = createStore(rootReducer);
export default store;
