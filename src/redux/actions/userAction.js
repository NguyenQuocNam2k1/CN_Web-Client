import { UserTypes } from "../contants/action-types";
import api from "../../apis/index.js";

export const logIn = (userName , password) => async (dispatch) => { 
    const response = await fakestoreapi.get("/api/user/logIn");
    dispatch({ type: AccountTypes.logIn, payload: {userName: userName , password : password} }); 
}
