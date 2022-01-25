import { UserTypes } from "../constants/action-types";
import api from "../../apis/index.js";

export const logIn = (username , password) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/logIn" , {
            username,
            password
        });
        dispatch({ type: UserTypes.LOG_IN, payload: response.data }); 
    } catch (err) {
        dispatch({ type: UserTypes.LOG_IN, payload: err.response.data }); 
    }
}

export const logInFB = () => async (dispatch) => {
    try {
        // api.get("https://3244-117-7-155-144.ngrok.io/api/user/auth/facebook/callback");
         window.open(`http://localhost:5000/api/user/auth/facebook`, "_self");
    } catch (error) {
        console.log("Error:" , error);
    }
}


export const test = () => async (dispatch) => {
    console.log("abc");
    try {
        const response = await api.get("/api/user/login/success");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
