import { combineReducers } from "redux";

import products from "./products/reducer";
import brands from "./brands/reducer";
import sorting from "./sorting/reducer";

export default combineReducers({
  products,
  sorting,
  brands
});
