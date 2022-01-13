import "./homepage.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className='container'>
      <div className='row homepage_layout_1'>
        <div className='col-5'></div>
        <div className='col-1'></div>
        <div className='col-6'>
          <h1>Tham gia học MIỄN PHÍ</h1>
          <Link to='/user/register'>
            <button className='button_homepage'>Đăng ký</button>
          </Link>
          <p>Hoặc đăng ký bằng</p>
        </div>
      </div>
      <div className='homepage_layout_2'>
        <h1>Lộ trình</h1>
        <div className='row justify-content-around'>
          <div className='col-4'>
            <div className='homepage_layout_2_image'>
              <Link to='/user/register'>
                <button>Đăng ký</button>
              </Link>
            </div>
            <p className='homepage_layout_2_text'>Mới bắt đầu</p>
          </div>
          <div className='col-4'>
            <div className='homepage_layout_2_image'>
              <Link to='/user/register'>
                <button>Đăng ký</button>
              </Link>
            </div>
            <p className='homepage_layout_2_text'>Font-End</p>
          </div>
          <div className='col-4'>
            <div className='homepage_layout_2_image'>
              <Link to='/user/register'>
                <button>Đăng ký</button>
              </Link>
            </div>
            <p className='homepage_layout_2_text'>Back-End</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
