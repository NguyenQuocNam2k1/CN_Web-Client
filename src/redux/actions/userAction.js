import { UserTypes } from "../constants/action-types";
import api from "../../apis/index.js";

export const logIn = (username , password) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/logIn" , {username,password});
        dispatch({ type: UserTypes.LOG_IN, payload: response.data }); 
    } catch (err) {
        dispatch({ type: UserTypes.LOG_IN, payload: err.response.data }); 
    }
}






