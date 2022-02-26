import { CourseType } from "redux/constants/action-types";
import api from "../../apis/index.js";

export const getAllCourseList = () => async(dispatch) =>{
    try {
        const response = await api.get("/api/course/courseLists");
        dispatch({type: CourseType.GET_COURSE_LISTS, payload: response.data.data})
    } catch (err) {
        console.log(err.response)
        dispatch({ type: CourseType.GET_COURSE_LISTS, payload: err.response.data }); 
    }
}

export const getRouterDetail = (typeCourse) => async(dispatch) => {
    try {
        const response = await api.post("/api/course/courseByRoute" , {typeCourse});
        dispatch({type: CourseType.GET_ROUTER_DETAIL, payload: response.data.data})
    } catch (err) {
        dispatch({ type: CourseType.GET_ROUTER_DETAIL, payload: err.response.data }); 
    }
}

export const getCourseById = (_id) => async(dispatch) => {
    try {
        const response = await api.post("/api/course/getCouser" , {_id});
        dispatch({type: CourseType.GET_COURSE_BY_ID, payload: response.data.data});
    } catch (err) {
        console.log("Error:",err.response.data);
    }
}