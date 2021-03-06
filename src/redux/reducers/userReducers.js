import { UserTypes } from "../constants/action-types";
import { setCookie } from "component/config/cookie";

const initialState = {
    dataUser: "100",
    stRegister: false,
    loading:false,
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.LOG_IN:
            if (payload.status === "200") {
                let valueToken = payload.token;
                // Apply setCookie
                localStorage.setItem("authUser" , JSON.stringify([payload.data]));
                setCookie('CCD', valueToken, 1);
            }
            return {...state , dataUser: payload.status};
        case UserTypes.REGISTER:
            return {...state , stRegister: payload.status};
        case UserTypes.ADD_COURSE:
            localStorage.setItem("authUser" , JSON.stringify(payload.data));
            return {...state, loading:!state.loading}
        case UserTypes.UPDATE_COURSE_STUDYING:
            localStorage.setItem("authUser" , JSON.stringify(payload.data));
            return {...state,loading: !state.loading}
        case UserTypes.RE_RENDER:
            return {...state , loading: !state.loading}
        default:
            return state;
    }
}