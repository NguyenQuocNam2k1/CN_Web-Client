import { UserTypes } from "../constants/action-types";


const initialState = {
    auth: false,
}

export const userReducer = (state = initialState , {type , payload}) =>{
    switch (type) {
        case UserTypes.LOG_IN:
            console.log(payload);
            let status ;
            if(payload.status === "200"){
                // Đẩy token lên cookie
                status = true
            } else {
                status = false
            }
            return {...state , auth:status };
        default:
            return state;
    }
}