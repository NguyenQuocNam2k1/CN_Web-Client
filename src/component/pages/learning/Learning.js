import "./Learning.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLessonByCourse } from "redux/actions/courseAction";

function Learning() {
  const courseList = useSelector((state) => state.courses.courseList);
  const courseListed = JSON.parse(localStorage.getItem("authUser"))[0];
  let listCourseStudied = [];
  courseList.filter((item) => {
    courseListed.course_studied.filter((lesson) => {
      if (item.idCoursesList === lesson) {
        listCourseStudied.push(item);
      }
    });
  });

  const dispatch = useDispatch();
  const handleClick = (idCourse, imgUrl) =>{
    localStorage.setItem("imageListCourse", JSON.stringify(imgUrl));
    dispatch(getLessonByCourse(idCourse));
  }

  return (
    <>
      {listCourseStudied.length !== 0 ? (
        <div className="container learning">
          <div className="row">
            {listCourseStudied.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-xxl-3 pe-2" key={index}>
                  <div className="card ln-card">
                    <Link to={{
                      pathname:`/courseDetail/${item.idCoursesList}`,
                      state:`${item.countUser}`
                      }} 
                      className="ln-link" onClick={()=>handleClick(item._id , item.image)}>
                      <div className="background" style={{"backgroundImage":`url(${item.image})`}}>
                        <button className="ln-btn">Học tiếp</button>
                      </div>
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text ln-views">{item.countUser} người đã tham gia khóa học</p>
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
            <h3>Bạn muốn trải nghiệm khóa học trên COCODER?</h3>
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
