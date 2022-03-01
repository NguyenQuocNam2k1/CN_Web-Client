import { CourseType } from "../constants/action-types";

const initialState = {
    courseList : [],
    routerDetail: [],
    courseById: ""
}

export const courseReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case CourseType.GET_COURSE_LISTS:
            return {...state , courseList : payload}
        case CourseType.GET_ROUTER_DETAIL:
            return {...state , routerDetail: payload}
        case CourseType.GET_COURSE_BY_ID: 
            return {...state , courseById: payload}
        default:
            return state;
    }
}