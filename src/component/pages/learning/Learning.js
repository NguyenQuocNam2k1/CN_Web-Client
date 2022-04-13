import "./Learning.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Learning() {
  const courseList = useSelector((state) => state.courses.courseList);
  //   console.log(courseList);
  const courseListed = JSON.parse(localStorage.getItem("authUser"))[0]
    .course_studied;
  let listCourseStudied = [];
  courseList.filter((item) => {
    courseListed.filter((lesson) => {
      if (item.idCoursesList === lesson) {
        listCourseStudied.push(item);
      }
    });
  });
  console.log(listCourseStudied);

  return (
    <>
      {listCourseStudied.length !== 0 ? (
        <div className="container learning">
          <div className="row">
            {listCourseStudied.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-xxl-4 mt-2" key={index}>
                  <div className="card ln-card">
                    <Link to="#" className="ln-link">
                      <div className="background">
                        <button className="ln-btn">Học tiếp</button>
                      </div>
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text ln-views">180.000 lượt xem</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="learning_body">
          <div className="learning_body_text">
            <h2>Opps, KHÔNG CÓ KHÓA HỌC NÀO</h2>
            <h3>Bạn chưa tham gia khóa học nào?</h3>
            <Link to="/muc-luc">
              <button className="btn-app-y button_jelly learning_body_button">
                Đi đến khóa học
              </button>
            </Link>
            <br />
            <p style={{ fontSize: "1.1rem" }}>
              Hoặc quay lại{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                Trang Chủ
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Learning;
