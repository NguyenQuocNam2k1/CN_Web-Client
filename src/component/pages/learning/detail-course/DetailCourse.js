import "./DetailCourse.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Comment from "./commentAndCodePen/comment/comment";
import Coding from "./commentAndCodePen/coding/coding.js";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Loading from "component/container/loading/Loading";
import {
  faCheck,
  faLock,
  faArrowRight,
  faList,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import * as dbCourseFix from "../../../data/index.js";

library.add(
  faCheck,
  faLock,
  faArrowRight,
  faList,
  faChevronLeft,
  faChevronRight
);

import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCourseStudying,
  reRender,
} from "../../../../redux/actions/userAction";

function DetailCourse(props) {
  const { slug } = useParams(); //Thằng này là tên khóa học
  const idLesson = useLocation().search.slice(4); //Thằng search này là id của bài học
  const { state } = useLocation(); // Thằng này giúp đếm số lượng người đã đăng ký học

  const [type, setType] = useState("comment");

  const iconCloseMenu = document.querySelector(
    ".svg-inline--fa.fa-arrow-right"
  );

  const closeMenu = () => {
    const iconMenu = document.querySelector(".svg-inline--fa.fa-list");
    const tabMenu = document.querySelector(".tab-menu");
    const video = document.querySelector(".video-content");
    iconMenu.style.display = "block";
    tabMenu.style.right = "-370px";
    video.style.width = "100%";
  };

  const openMenu = () => {
    const iconMenu = document.querySelector(".svg-inline--fa.fa-list");
    const tabMenu = document.querySelector(".tab-menu");
    const video = document.querySelector(".video-content");
    iconMenu.style.display = "none";
    tabMenu.style.right = "0px";
    video.style.width = "75%";
  };

  //React-Player
  const ref = useRef();
  const currentTimeVideo = useRef(0);
  const totalTimeVideo = useRef(0);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);
  let authUser = JSON.parse(localStorage.getItem("authUser"))[0];
  const listCourse = JSON.parse(localStorage.getItem("LessonByCourse")) || [];

  useEffect(() => {
    authUser = JSON.parse(localStorage.getItem("authUser"))[0];
  }, [loading]);
  let idLessonStudied = 0,
    indexLessonStudied = 0,
    indexLessonPresent,
    indexLessonFuture;

  let linkVideo = "";
  if (authUser.lesson_course.length !== 0) {
    idLessonStudied = authUser.lesson_course.filter(
      (item) => item.idCourse === slug
    );
    if (idLessonStudied.length !== 0) {
      listCourse.map((lesson, index) => {
        if (lesson._id === idLessonStudied[0].idLesson) {
          indexLessonStudied = index;
        }
        if (lesson._id === idLesson) indexLessonPresent = index;
      });
      indexLessonFuture = indexLessonStudied;
      linkVideo = listCourse[indexLessonPresent].video;
    }
  }

  const getCurrentTime = () => {
    currentTimeVideo.current = ref.current.getCurrentTime();
    if (
      totalTimeVideo.current > 0 &&
      currentTimeVideo.current / totalTimeVideo.current > 0.7
    ) {
      if (indexLessonPresent === indexLessonStudied) {
        indexLessonFuture = ++indexLessonStudied;
        const newLessonCourse = authUser.lesson_course.map((item) => {
          if (item.idCourse === slug) {
            item.idLesson = listCourse[indexLessonFuture]._id;
            return item;
          }
          return item;
        });
        dispatch(updateCourseStudying(authUser._id, newLessonCourse));
        totalTimeVideo.current = 0;
      }
    }
  };
  const getTotalTimeVideo = () => {
    totalTimeVideo.current = ref.current.getDuration();
  };

  return (
    <>
      {idLessonStudied.length === 0 ? (
        <Loading></Loading>
      ) : (
        <div style={{ display: "flex" }}>
          <div className="video-detail">
            <div className="title-video">
              <Link
                to={{
                  pathname: `/courseDetail/${slug}`,
                  state: `${state}`,
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              </Link>
              <p>{dbCourseFix[`${slug}`].course}</p>
              <FontAwesomeIcon icon="fa-solid fa-list" onClick={openMenu} />
            </div>
            <div className="video-content">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              <div>
                <ReactPlayer
                  url={linkVideo}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                  ref={ref}
                  controls
                  onProgress={getCurrentTime}
                  onStart={getTotalTimeVideo}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </div>
            <div className="comment-coding">
              <div className="title">
                <p
                  className="title-comment"
                  onClick={() => {
                    openMenu();
                    setType("comment");
                    document.querySelector(
                      ".title-comment"
                    ).style.borderBottom = "2px solid red";
                    document.querySelector(".title-coding").style.borderBottom =
                      "none";
                    document.querySelector(".comment-coding").style.width =
                      "70%";
                  }}
                >
                  Bình luận
                </p>
                <p
                  className="title-coding"
                  onClick={() => {
                    closeMenu();
                    setType("coding");
                    document.querySelector(
                      ".title-comment"
                    ).style.borderBottom = "none";
                    document.querySelector(".title-coding").style.borderBottom =
                      "2px solid red";
                    document.querySelector(".comment-coding").style.width =
                      "96%";
                  }}
                >
                  Coding
                </p>
              </div>

              {/* Comment */}
              {type === "comment" ? (
                <Comment idRoom={idLesson} user={authUser} />
              ) : (
                <Coding />
              )}
            </div>

            <div className="tab-menu">
              <div className="tittle-list">
                Nội dung khóa học
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  onClick={closeMenu}
                />
              </div>
              <ul className="list-course">
                {listCourse.map((course, index) =>
                  // indexLessonFuture >= index ?
                  indexLessonFuture >= index ? (
                    <Link
                      to={{
                        pathname: `/learning/${slug}`,
                        search: `id=${course._id}`,
                      }}
                      key={index}
                      style={{ textDecoration: "none" }}
                    >
                      <li
                        key={index}
                        className={
                          indexLessonPresent === index
                            ? "name-course-present"
                            : "name-course"
                        }
                      >
                        {course.name}
                      </li>
                    </Link>
                  ) : (
                    <li key={index} className="name-course-lock">
                      {course.name}
                      <FontAwesomeIcon icon="fa-solid fa-lock" />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailCourse;
