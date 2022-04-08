import React,{memo, useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function listCourse({listCourse , slug , indexLessoned, openLock ,socket , user, indexLessonPresent}) {

  if (openLock){
    indexLessoned++;
    let newLessonCourse = user.lesson_course.map(item => {
      if(item.idCourse === slug){
        item.idLesson = listCourse[indexLessoned]._id;
        return item;
      }
      return item;
    });
    // console.log(newLessonCourse);
    socket.emit("update_lesson_course", {_id:user._id, newLessonCourse});
  }
  

  
  return (
    <ul className="list-course">
      {listCourse.map((course, index) =>
        index > indexLessoned ? (
          <li key={index} className="name-course-lock">
            {course.name}
            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </li>
        ) : (
          // <a href={`http://localhost:3000/learning/${slug}?id=${course._id}`}
          //   key={index}
          //   style={{ "textDecoration": "none"}}
          // >
          <Link to={{
            pathname: `/learning/${slug}`,
            search: `id=${course._id}`,
          }}
          key={index}
          >
            <li className={indexLessonPresent===index? "name-course-present" : "name-course"}>
              {course.name}
              {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
            </li>
          </Link>
          // </a>
        )
      )}
    </ul>
  );
}

export default memo(listCourse);
