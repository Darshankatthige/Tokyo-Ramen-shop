import { combineReducers } from "redux";
import shops from "./shops.js";
// Reducer Index file
const rootreducer = combineReducers({
  shops: shops, // Combining the Reducers 
});

export default rootreducer; // Exported Root Reducer
