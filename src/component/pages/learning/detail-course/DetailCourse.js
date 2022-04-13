import "./DetailCourse.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Comment from "./commentAndCodePen/comment/comment";
import Coding from "./commentAndCodePen/coding/coding.js";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import io from "socket.io-client";
import ListCourse from "./commentAndCodePen/comment/listCourse";
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
import { useSelector } from "react-redux";

// const socket = io.connect("http://localhost:5000");
const socket = io.connect("https://cn-web.herokuapp.com");

function DetailCourse(props) {
  const { slug } = useParams(); //Thằng này là tên khóa học
  const { search } = useLocation(); //Thằng search này là id của bài học

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

  //React Player
  let user = JSON.parse(localStorage.getItem("authUser"));
  const listCourse = JSON.parse(localStorage.getItem("LessonByCourse")) || [];
  let indexLesson;
  const BaiDaHocGanNhat = user[0].lesson_course.length === 0 ? [{ idLesson: search.slice(4) }] : user[0].lesson_course.filter((item) => item.idCourse === slug);
  let ViTriBaiDaHocGanNhat;

  const linkVideo = listCourse.filter((lesson, index) => {
    if (BaiDaHocGanNhat.length === 0) return;
    if (lesson._id === search.slice(4)) indexLesson = index;
    if (lesson._id === BaiDaHocGanNhat[0].idLesson)
      ViTriBaiDaHocGanNhat = index;
    return lesson._id == search.slice(4);
  });

  const ref = useRef();
  const [indexLessonFuture, setIndexLessonFuture] = useState(ViTriBaiDaHocGanNhat);
  const [openLock, setOpenLock] = useState(false);
  const totalTimeVideo = useRef(0);
  const currentTimeVideo = useRef(0);

  const getCurrentTimePlay = () => {
    currentTimeVideo.current = ref.current.getCurrentTime();
    setOpenLock(false);
    console.log(indexLesson, ViTriBaiDaHocGanNhat,indexLessonFuture );
    if (
      currentTimeVideo.current / totalTimeVideo.current > 0.7 &&
      indexLesson === ViTriBaiDaHocGanNhat
    ) {
      setIndexLessonFuture(ViTriBaiDaHocGanNhat + 1);
      if (indexLessonFuture > ViTriBaiDaHocGanNhat) {
        if (indexLessonFuture < listCourse.length) setOpenLock(true);
      }
    }
  };

  const getTotalTimeVideo = () => {
    totalTimeVideo.current = ref.current.getDuration();
  };

  useEffect(() => {
    socket.on("receive_user", (data) => {
      localStorage.setItem("authUser", JSON.stringify(data));
    });
  }, [socket]);

  return (
    <>
      {BaiDaHocGanNhat.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <div className="video-detail">
            <div className="title-video">
              <Link to="/learning">
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              </Link>
              <p>{dbCourseFix[`${slug}`].course}</p>
              <FontAwesomeIcon icon="fa-solid fa-list" onClick={openMenu} />
            </div>
            <div className="video-content">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              <div>
                <ReactPlayer
                  url={linkVideo[0].video}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                  ref={ref}
                  controls
                  onProgress={getCurrentTimePlay}
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
                <Comment idRoom={search.slice(4)} socket={socket} user={user[0]} />
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

              {/* list course */}
              <ListCourse
                listCourse={listCourse}
                slug={slug}
                indexLessoned={indexLessonFuture || 0}
                openLock={openLock}
                socket={socket}
                user={user[0]}
                indexLessonPresent={indexLesson}
                currentTimeVideo={currentTimeVideo.current}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailCourse;
