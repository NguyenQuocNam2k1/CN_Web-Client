import { CourseType } from "../constants/action-types";

const initialState = {
  courseList: [],
  routerDetail: [],
  typeCourse: "", // Thằng này dùng để set kiểu list courer cho thằng chi tiết lộ trình,
  render: true,
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CourseType.GET_COURSE_LISTS:
      return { ...state, courseList: payload };
    case CourseType.GET_ROUTER_DETAIL:
      return { ...state, routerDetail: payload };
    case CourseType.SET_ROUTER_DETAIL:
      return { ...state, typeCourse: payload };
    case CourseType.GET_LESSON_BY_COURSE:
      localStorage.setItem("LessonByCourse", JSON.stringify(payload))
      return {...state, render: !state.render }
    default:
      return state;
  }
};
