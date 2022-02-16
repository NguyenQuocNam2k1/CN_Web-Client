import { CourseType } from "../constants/action-types";

const initialState = {
    courseList : [],
}

export const courseReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case CourseType.GET_COURSE_LISTS:
            return {...state , courseList : payload}
        default:
            return state;
    }
}