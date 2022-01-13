import { UserTypes } from "../constants/action-types";


const initialState = {
    auth: {},
}

export const userReducer = (state = initialState , {type , payload}) =>{
    switch (type) {
        case UserTypes.LOG_IN:
            // console.log(payload);
            if(payload.status === "200"){
                // Đẩy token lên cookie

            } else {

            }
            return {...state , auth:payload };
        default:
            return state;
    }
}