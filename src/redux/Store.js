import {createStore} from "redux";
import { productReducer } from "./reducer/ProductReducer";

 const store = createStore( productReducer);
 
 export default store;