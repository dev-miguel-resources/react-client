import { combineReducers } from "redux"; // combinar todos mis reducers para acceder a todo su comportamiento desde un reducer padre
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
