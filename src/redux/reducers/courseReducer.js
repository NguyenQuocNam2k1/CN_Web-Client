import { CourseType } from "../constants/action-types";

const initialState = {
  courseList: [],
  routerDetail: [],
  courseById: "",
  typeCourse: "", // Thằng này dùng để set kiểu list courer cho thằng chi tiết lộ trình
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CourseType.GET_COURSE_LISTS:
      return { ...state, courseList: payload };
    case CourseType.GET_ROUTER_DETAIL:
      return { ...state, routerDetail: payload };
    case CourseType.SET_ROUTER_DETAIL:
      return { ...state, typeCourse: payload };
    case CourseType.GET_COURSE_BY_ID:
      return { ...state, courseById: payload };
    case CourseType.GET_LESSON_BY_COURSE:
      localStorage.setItem("LessonByCourse", JSON.stringify(payload))
      return {...state}
    default:
      return state;
  }
};
