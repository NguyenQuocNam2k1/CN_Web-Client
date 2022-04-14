import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "component/container/loading/Loading";
import { getLessonByCourse } from "redux/actions/courseAction";
import "./mucLuc.css";

function MucLuc(props) {
  const dispatch = useDispatch();

  const courseList = useSelector((state) => state.courses.courseList);
  const handleClick = (idCourse , imgUrl) => {
    localStorage.setItem("imageListCourse" , JSON.stringify(imgUrl));
    dispatch(getLessonByCourse(idCourse));
  };
  return (
    <div className="container mt-16 muc-luc">
      {courseList.length === 0 || !courseList ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="row">
          <div className="col-3 list-name">
            <div className="list-course-name">
              <div className="title">Ngôn ngữ</div>
              <ul className="list-name">
                <li className="course-name">
                  <p>HTML & CSS</p>
                  <ul className="list-name-children">
                    <Link to="#">
                      <li className="course-children">HTML basic</li>
                    </Link>
                    <Link to="#">
                      <li className="course-children">HTML nâng cao</li>
                    </Link>
                  </ul>
                </li>

                <li className="course-name">
                  <p>Python</p>
                  <ul className="list-name-children">
                    <Link to="#">
                      <li className="course-children">Python basic</li>
                    </Link>
                    <Link to="#">
                      <li className="course-children">Python nâng cao</li>
                    </Link>
                  </ul>
                </li>

                <li className="course-name">
                  <p>JavaScript</p>
                  <ul className="list-name-children">
                    <Link to="#">
                      <li className="course-children">JavaScript basic</li>
                    </Link>
                    <Link to="#">
                      <li className="course-children">JavaScript nâng cao</li>
                    </Link>
                  </ul>
                </li>

                <li className="course-name">
                  <p>Java</p>
                  <ul className="list-name-children">
                    <Link to="#">
                      <li className="course-children">Java basic</li>
                    </Link>
                    <Link to="#">
                      <li className="course-children">Java nâng cao</li>
                    </Link>
                  </ul>
                </li>

                <li className="course-name">
                  <p>SQL</p>
                </li>

                <li className="course-name">
                  <p>C</p>
                </li>

                <li className="course-name">
                  <p>ReactJS</p>
                </li>

                <li className="course-name">
                  <p>VueJS</p>
                </li>

                <li className="course-name">
                  <p>NodeJS</p>
                </li>
              </ul>
            </div>
          </div>

          {/*  Khoa hoc */}
          <div className="col-9 muc-luc">
            {/* Layout tieu de */}
            <div className="lo-trinh">
              <div className="row">
                <div className="title">
                  <div className="col-8 title-left">
                    <p>Không biết bắt đầu từ đâu?</p>
                  </div>
                  <div className="col-4 title-right">
                    <Link to="/lo-trinh">Đến lộ trình</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* List courses */}
            <div className="col-12 title-courses">Khóa học nổi bật</div>
            <div className="row">
              {/* item course */}
              {courseList.map((course) => {
                return (
                  <div className="col-4 item-course" key={course._id}>
                    <div className="card course">
                      <img
                        src={course.image}
                        className="card-img-top ml-img img-hover-zoom img-hover-zoom--colorize"
                        alt="anh-khoa-hoc"
                        style={{ height: "182px" }}
                      ></img>

                      <div className="card-body body-course">
                        <h5 className="card-title title-course">
                          {course.name}
                        </h5>

                        <p className="card-text description-course">
                          {course.description}
                        </p>
                        <div className="submit-course">
                          <Link
                            to={{
                              pathname:`/courseDetail/${course.idCoursesList}`,
                              state:`${course.countUser}`
                            }}
                            className="btn-primary button_jelly"
                            onClick={() => handleClick(course._id , course.image)}
                            style={{
                              fontSize: "18px",
                              padding: "6px 41px",
                              fontWeight: "500",
                            }}
                          >
                            Chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MucLuc;
