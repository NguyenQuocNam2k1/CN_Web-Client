import React , {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import Loading from "component/container/loading/Loading";
import "./fontEnd.css";
import {Link , useParams} from "react-router-dom";
import { getRouterDetail, getLessonByCourse } from "redux/actions/courseAction";


const FE = [
  { title: "Front-end" },
  {
    type:"front-end",
    title: "Front-end",
    ds: "Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng",
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.",
  },
  {
    type:"back-end",
    title: "Back-end",
    ds: "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.",
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.",
  },
  {
    type:"moi-bat-dau",
    title: "Mới bắt đầu",
    ds: "Những người mới bắt đầu học lập trình cơ bản thường hay cân nhắc xem nên chọn học ngôn ngữ lập trình gì. Trước khi bắt đầu học lập trình hay bất kể thứ gì khác, chúng ta cần có một nền tảng tốt. Hãy chăm chỉ luyện tập thực hành các bài tập lập trình.",
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra nhằm giúp các bạn có nền tảng tư duy lập trình, và làm quen với các thuật ngữ trong lập trình",
  },
  {
    type:"data-science",
    title: "Data-Science",
    ds: "Những người mới bắt đầu học lập trình cơ bản thường hay cân nhắc xem nên chọn học ngôn ngữ lập trình gì. Trước khi bắt đầu học lập trình hay bất kể thứ gì khác, chúng ta cần có một nền tảng tốt. Hãy chăm chỉ luyện tập thực hành các bài tập lập trình.",
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một Data-Scientist",
  },
];


function Index() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  let dataCourseRouter ;
  dataCourseFix.forEach((data) => {
    if(data.type === slug){
      return dataCourseRouter = data;
    }
  });

  useEffect(() => {
    dispatch(getRouterDetail(slug));
  }, []);
  const { routerDetail } = useSelector((state) => state.courses);
  const handleClick = (idCourse, imgUrl) => {
    localStorage.setItem("imageListCourse", JSON.stringify(imgUrl));
    dispatch(getLessonByCourse(idCourse));
  };
  return (
    <>
      {routerDetail.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="font_layout_1">
            <div className="container font_layout_1_child">
              <div className="font_layout_1_child_w">
                <h1>{dataCourseRouter.title}</h1>
                <div className="font_layout_1_text">{dataCourseRouter.ds}</div>
                <div
                  className="font_layout_1_text"
                  style={{ paddingBottom: "10px" }}
                >
                 {dataCourseRouter.ds1}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {routerDetail.map((value) => {
              return (
                <div className="font_layout_2" key={value._id}>
                  <h2>{value.name}</h2>
                  <div className="description_course">{value.lorem}</div>
                  <div className="container courser">
                    <div className="row font_courser">
                      <div className="col-5 font_courser_image">
                        <img src={value.image} alt="router_detail" />
                      </div>
                      <div className="col-7 font_courser_text">
                        <h3>
                          <b>{value.name}</b>
                        </h3>
                        <h4 className="description_course">
                          {value.description}
                        </h4>
                        <Link
                          to={{
                            pathname: `/courseDetail/${value.idCoursesList}`,
                          }}
                        >
                          <button
                            onClick={() => handleClick(value._id, value.image)}
                            className="button_jelly btn-app-rt"
                          >
                            Xem khóa học
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
       )} 
    </>
  );
}

export default Index;
