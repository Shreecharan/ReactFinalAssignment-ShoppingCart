import CartReducer from "./CartReducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
	cart: CartReducer,
});
export default AllReducers;
