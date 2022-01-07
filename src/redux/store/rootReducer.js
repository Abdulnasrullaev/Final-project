import { combineReducers } from "redux";
import { CartReducer } from "../modules/cart/cartReducer";
import { getHistoryReducer } from "../modules/getHistory/getHistoryReducer";
import { getProductReducer } from "../modules/getProduct/getProductReducer";


export const rootReducer = combineReducers({
  getProduct: getProductReducer,
  cart: CartReducer,
  histories: getHistoryReducer,
 });
