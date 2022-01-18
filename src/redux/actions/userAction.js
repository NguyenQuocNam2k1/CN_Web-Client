import { UserTypes } from "../constants/action-types";
import api from "../../apis/index.js";

export const logIn = (userName , password) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/logIn" , {
            userName,
            password
        });

        dispatch({ type: UserTypes.LOG_IN, payload: response.data }); 
    } catch (err) {
        dispatch({ type: UserTypes.LOG_IN, payload: err.response.data }); 
    }
}

export const logInFB = () => async (dispatch) => {
    try {
        const response = await api.get("/api/user/auth/facebook");
        console.log(response);
    } catch (error) {
        console.log("Error");
    }
}
