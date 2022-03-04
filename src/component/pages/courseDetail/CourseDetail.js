import "./courseDetail.css";
import * as dbCourseFix from "../../data/index.js";
import { Link, useParams } from "react-router-dom";
import Loading from "component/container/loading/Loading";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import thumbnailHTML from "../../../images/thumbnailHTML.png"


function courseDetail(props) {
  const nameCourse = useParams().slug;
  const [LessonOfCourse, setLessonOfCourse] = useState([]);
  const re_render = useSelector(state => state.courses.render);
  useEffect(() => {
      setLessonOfCourse(JSON.parse(localStorage.getItem("LessonByCourse")));
  }, [re_render || nameCourse ]);

    const listReview = dbCourseFix[`${nameCourse}`].review.map((r, index) => {
      return (
        <li key={`rv${index}`} className="list-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
            color="#0a58ca"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          <span>{r}</span>
        </li>
      );
    });
    const listRequire = dbCourseFix[`${nameCourse}`].require.map((req, index) => {
      return (
        <li key={`req${index}`} className="list-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
            color="#0a58ca"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          <span>{req}</span>
        </li>
      );
    });
  const listContent = LessonOfCourse.map((content) => {
    return (
      <div className="cd-body-lesson-1" key={content._id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
          color="#0a58ca"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
        <Link to="#">
          <span>{content.name}</span>
        </Link>
      </div>
    );
  });

  return (
    <>
      {LessonOfCourse.length === 0 ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <div className="course-detail">
          <div className="cd-header">
            <h2 className="cd-header-title">{dbCourseFix[`${nameCourse}`].course}</h2>
          </div>
          <div className="row cd-body">
            <div className="col-8 cd-body-left">
              <div className="row cd-body-course">
                <div className="col-12 cd-body-learn">
                  <h3 className="cd-body-title">Bạn sẽ học được gì?</h3>
                  <ul>{listReview}</ul>
                </div>
                <div className="col-12 cd-body-learn">
                  <h3 className="cd-body-title">Yêu cầu</h3>
                  <ul>{listRequire}</ul>
                </div>
                <div className="col-12 cd-body-learn">
                  <h3 className="cd-body-title">Nội dung khóa học</h3>
                  <div className="cd-body-lesson">{listContent}</div>
                </div>
              </div>
            </div>

            <div className="col-3 card cd-body-right">
              <img src={thumbnailHTML} className="card-img-top" alt="..." />
              <div className="card-body cd-card-body">
                <button className="button_jelly cd-btn">Vào học</button>
                <div className="cd-card-body-count">
                  <ul>
                    <li className="cd-card-list">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      color="blue"
                      fill="currentColor" 
                      color="#0d6efd"
                      class="bi bi-calendar-check-fill" 
                      viewBox="0 0 16 16">
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <span>Trình độ cơ bản </span>
                    </li>
                    <li className="cd-card-list">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      color="#0d6efd"
                      class="bi bi-file-earmark-play" 
                      viewBox="0 0 16 16">
                        <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                      </svg>
                    <span>Tổng số bài học 900 </span>
                    </li>
                    <li className="cd-card-list">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      color="#0d6efd"
                      class="bi bi-stopwatch" 
                      viewBox="0 0 16 16">
                        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                        <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                      </svg>
                    <span>Thời lượng học 32 giờ 10 phút </span>
                    </li>
                    <li className="cd-card-list">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      class="bi bi-shop" 
                      color="#0d6efd"
                      viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                      </svg>
                    <span>Học mọi lúc mọi nơi </span>
                    </li>
                  </ul>
                </div>

            </div>
              {/* <div className="cbc cd-body-count-user">
                Có <br />
                <p className="number">120.000</p>
                <br /> người đã học khoá này
              </div>
              <div className="cbc cd-body-count-time">
                Thời gian hoàn thành khoá học <br />
                <p className="number">9 giờ</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default courseDetail;
