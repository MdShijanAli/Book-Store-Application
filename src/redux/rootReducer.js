import { combineReducers } from "redux";
import reducer from "./books/reducer";

const rootReducer = combineReducers({
  books: reducer
});

export default rootReducer