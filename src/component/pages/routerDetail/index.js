import React from "react";
import { useSelector } from "react-redux";
import Loading from "component/container/loading/Loading";
import "./fontEnd.css";

const FE = [
  { title: "Font-end" },
  {
    ds: "Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng",
  },
  {
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.",
  },
];

const BE = [
  { title: "Back-end" },
  {
    ds: "Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng",
  },
  {
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Back-end.",
  },
];

function Index() {
  const dataRouteDetail = useSelector((state) => state.courses.routerDetail);
  console.log(dataRouteDetail);
  return (
    <>
      {dataRouteDetail.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="font_layout_1">
            <div className="container font_layout_1_child">
              <div className="font_layout_1_child_w">
                <h1>Font-end</h1>
                <div className="font_layout_1_text">
                  Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                  Front-end và Back-end. Front-end là phần giao diện người dùng
                  nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile
                  hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của
                  lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử
                  dụng và tối ưu trải nghiệm người dùng
                </div>
                <div
                  className="font_layout_1_text"
                  style={{ paddingBottom: "10px" }}
                >
                  Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ
                  ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {dataRouteDetail.map((value) => {
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
                        <h3><b>{value.name}</b></h3>
                        <h4>{value.description}</h4>
                        <button className="btn-app-y">Xem khóa học</button>
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
