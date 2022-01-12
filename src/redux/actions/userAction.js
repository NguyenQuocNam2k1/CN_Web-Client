import { UserTypes } from "../contants/action-types";
import api from "../../apis/index.js";

export const logIn = (userName , password) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/logIn" , {
            userName,
            password
        });
        dispatch({ type: UserTypes.LOG_IN, payload: response }); 
    } catch (err) {
        console.log(err.response);
    }
}
