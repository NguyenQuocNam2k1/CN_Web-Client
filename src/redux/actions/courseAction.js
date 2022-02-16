import { CourseType } from "redux/constants/action-types";
import api from "../../apis/index.js";

export const getAllCourseList = () => async(dispatch) =>{
    try {
        const response = await api.get("/api/course/courseLists");
        dispatch({type: CourseType.GET_COURSE_LISTS, payload: response.data.dataCourseList})
    } catch (err) {
        dispatch({ type: CourseType.GET_COURSE_LISTS, payload: err.response.data }); 
    }
}