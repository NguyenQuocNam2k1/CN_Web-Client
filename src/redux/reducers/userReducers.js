import { UserTypes } from "../contants/action-types"


const initialState = {}

export const userReducer = (state = 0 , {type , payload}) =>{
    switch (type) {
        case UserTypes.LOG_IN:
            
            return {...state};
        default:
            return state;
    }
}