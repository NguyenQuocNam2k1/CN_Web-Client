import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

const reducer = combineReducers({
    users: userReducer,
})

export default reducer;