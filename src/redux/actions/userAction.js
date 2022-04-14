import { UserTypes } from "../constants/action-types";
import api from "../../apis/index.js";
import { async } from "@firebase/util";

export const logIn = (email , password) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/logIn" , {email , password});
        dispatch({ type: UserTypes.LOG_IN, payload: response.data }); 
    } catch (err) {
        console.log("Error:" , err);
    }
}


export const register = (username , password , email) => async (dispatch) => { 
    try {
        const response = await api.post("/api/user/register" , {username,password,email});
        dispatch({ type: UserTypes.REGISTER, payload: response.data }); 
    } catch (err) {
        console.log("Error:" , err)
    }
}

export const addCourse = (idCourse, _id, idLesson,countUser) =>  async(dispatch) => {
    countUser++;
    try {
        const response = await api.post("/api/user/addCourse" , {idCourse,_id,idLesson,countUser});
        dispatch({ type: UserTypes.ADD_COURSE, payload: response.data }); 
    } catch (err) {
        console.log("Error:" , err);
    }
}

export const updateCourseStudying = (_id, newLessonCourse ) =>  async(dispatch) => {
    try {
        const response = await api.post("/api/user/updateCourseStudying" , {_id , newLessonCourse});
        dispatch({ type: UserTypes.UPDATE_COURSE_STUDYING, payload: response.data }); 
    } catch (err) {
        console.log("Error:" , err);
    }
}

export const reRender = () => async(dispatch) => {
    try{
        dispatch({type: UserTypes.RE_RENDER})
    }catch(err){
        console.log("Error", err);
    }
}

