import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { userReducer } from "./userReducers";

const reducer = combineReducers({
    users: userReducer,
    courses: courseReducer,
})

export default reducer;