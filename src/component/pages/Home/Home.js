import "./homepage.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {test} from "../../../redux/actions/userAction";

function Home(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(test());
  }
  return (
    <>
      <div className='container homepage-container'>
      <div onClick={handleClick}>Test API</div>
        <div className='row homepage_layout_1'>
          <div className='col-6 homepage_layout_1_image'>
            <div></div>
            {/* Thẻ div bên trên là chứa background. yêu cầu không ai được xóa */}
          </div>
          <div className='col-6 homepage_layout_1_layout'>
            <h1>Tham gia khóa học MIỄN PHÍ</h1>
            <Link to='/user/register'>
              <button className='button_homepage'>Đăng ký</button>
            </Link>
            <p>Hoặc đăng ký bằng</p>
            <div className='list_logo'>
              <div className='logo logo_gg'></div>
              <div className='logo logo_facebook'></div>
              <div className='logo logo_github'></div>
            </div>
          </div>
        </div>
        <div className='homepage_layout_2'>
          <h1>Lộ trình</h1>
          <div className='row justify-content-around'>
            <div className='col-xl-4 col-md-4'>
              <div className='homepage_layout_2_image_1'>
                <Link to='/user/register'>
                  <button>Chi tiết</button>
                </Link>
                <div className='homepage_layout_2_text'>Mới bắt đầu</div>
              </div>
            </div>
            <div className='col-xl-4 col-md-4'>
              <div className='homepage_layout_2_image_2'>
                <Link to='/user/register'>
                  <button>Chi tiết</button>
                </Link>
                <div className='homepage_layout_2_text'>Font-End</div>
              </div>
            </div>
            <div className='col-xl-4 col-md-4'>
              <div className='homepage_layout_2_image_3'>
                <Link to='/user/register'>
                  <button>Chi tiết</button>
                </Link>
                <div className='homepage_layout_2_text'>Back-End</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='homepage_layout_3'>
        <div>
          <h1>120.000+</h1>
          <br />
          <h2>nguời khác đã học</h2>
        </div>
      </div>
      <div className='homepage_layout_4'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 homepage_layout_4_image'></div>
            <div className='col-6 homepage_layout_4_text'>
              <div className='col-12'></div>
              <h1>Tham gia ngay thôi!</h1>
              <p>
                Nếu đã xem tới đây thì bạn chắc hẳn bạn đã khá tò mò rồi nhỉ.
                Đăng ký ngay để học và hoàn thành mục tiêu thôi nào
              </p>
              <Link to='/user/register'>
                <button className='button_homepage'>Đăng ký</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
