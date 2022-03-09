import { CourseType } from "redux/constants/action-types";
import api from "../../apis/index.js";

export const getAllCourseList = () => async(dispatch) =>{
    try {
        const response = await api.get("/api/course/courseLists");
        dispatch({type: CourseType.GET_COURSE_LISTS, payload: response.data.data})
    } catch (err) {
        console.log("Error:",err);
    }
}


export const getRouterDetail = (typeCourse) => async(dispatch) => {
    try {
        const response = await api.post("/api/course/courseByRoute" , {typeCourse});
        dispatch({type: CourseType.GET_ROUTER_DETAIL, payload: response.data.data})
    } catch (err) {
        console.log("Error:",err);
    }
}


export const getLessonByCourse = (listCourse) => async(dispatch) => {
    try {
        const response = await api.post("/api/course/lessonByIdCourse" , {listCourse});
        dispatch({type: CourseType.GET_LESSON_BY_COURSE, payload: response.data.data});
    } catch (err) {
        localStorage.setItem("LessonByCourse", JSON.stringify([]))
    }
}
