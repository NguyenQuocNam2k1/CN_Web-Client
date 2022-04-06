import "./homepage.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="container homepage-container">
        <div className="row homepage_layout_1">
          <div className="col-lg-6 col-sm-12 homepage_layout_1_image">
            <div data-aos="fade-right"></div>
            {/* Thẻ div bên trên là chứa background. yêu cầu không ai được xóa */}
          </div>
          <div className="col-lg-6 homepage_layout_1_layout" data-aos="fade-left">
            <h1>Tham gia học MIỄN PHÍ</h1>
            <Link to="/user/register" style={{ "paddingLeft": "45px" }}>
              <button className="button_homepage">Đăng ký</button>
            </Link>
            <p>Hoặc đăng ký bằng</p>
            <div className="list_logo">
              <div className="logo logo_gg"></div>
              <div className="logo logo_facebook"></div>
              <div className="logo logo_github"></div>
            </div>
          </div>
        </div>
        <div className="homepage_layout_2">
          <div className="row">
            <div className="col-5 homepage_layout_2_left" data-aos="fade-up-right">
              <div>
                <h1>
                  MỤC TIÊU <br /> của bạn là gì?
                </h1>
                <p>
                  Một trong những điều quan trọng nhất bạn cần làm khi học lập
                  trình đó là xác định đúng mục tiêu học tập của mình.
                </p>
                <button className="btn-app btn-app-layout_2">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="background_1_layout_2 col-6" data-aos="fade-down">
                  <div>
                    <button>Beginner</button>
                  </div>
                </div>
                <div className="background_2_layout_2 col-6" data-aos="fade-down">
                  <div>
                    <button>Data</button>
                  </div>
                </div>
                <div className="background_3_layout_2 col-6" data-aos="fade-up">
                  <div>
                    <button>Front-end</button>
                  </div>
                </div>
                <div className="background_4_layout_2 col-6" data-aos="fade-up">
                  <div>
                    <button>Back-end</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage_layout_5">
          <div className="row">
            <div className="col-6">
              <div className="homepage_layout_5_left">
                <div className="background_layout_5" data-aos="fade-up-right"></div>
              </div>
            </div>
            <div className="col-6 homepage_layout_5_right" data-aos="fade-up-left">
              <div>
                <h1>Bạn đang là học viên của CoCoders?</h1>
                <button className="btn-app-layout_2 btn-app"
                  style={{
                    "borderRadius": "30px",
                    "width": "290px",
                    "height": "48px"
                  }}>
                  Xem khóa đang học
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage_layout_3">
        <div>
          {/* <h1>120.000+</h1>
          <h2>nguời khác đã học</h2> */}
        </div>
      </div>
      {/* Layout 6 */}
      {/* <div className="container">
        <div className="homepage_layout_5">
          <div className="row">
            <div className="col-6 homepage_layout_5_right">
              <div>
                <h1>Kiểm tra năng lực với hệ thống bài kiểm tra</h1>
                <button className="btn-app-layout_2 btn-app">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="homepage_layout_5_left">
                <div className="background_layout_6"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="homepage_layout_4">
        <div className="container">
          <div className="row">
            <div className="col-6 homepage_layout_4_image" data-aos="fade-up-right"></div>
            <div className="col-6 homepage_layout_4_text" data-aos="fade-up-left">
              <h1>Tham gia ngay thôi!</h1>
              <p>
                Nếu đã xem tới đây thì bạn chắc hẳn bạn đã khá tò mò rồi nhỉ.
                Đăng ký ngay để học và hoàn thành mục tiêu thôi nào
              </p>
              <Link to="/user/register">
                <button className="button_homepage">Đăng ký</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
