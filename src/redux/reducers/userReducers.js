import { UserTypes } from "../constants/action-types";

const initialState = {
    auth: {},
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.LOG_IN:
            console.log(payload);

            if (payload.status === "200") {

                let valueToken = payload.token;
                // Set a Cookie
                function setCookie( nameCookie, valueCookie, numberDays) {
                    let date = new Date();
                    date.setTime(date.getTime() + (numberDays * 24 * 60 * 60 * 1000));
                    const expires = "expires=" + date.toUTCString();
                    document.cookie = nameCookie + "=" + valueCookie + "; " + expires + "; path=/";
                }
                // Apply setCookie
                setCookie('token', valueToken, 1);

            }
            return {
                ...state,
                auth: payload,
            };
        default:
            return state;
    }
}