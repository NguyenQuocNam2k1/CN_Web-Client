import "./homepage.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className='container'>
      <div className='row hompage_layout_1'>
        <div className='col-5'></div>
        <div className='col-1'></div>
        <div className='col-6'>
          <h1>Tham gia học MIỄN PHÍ</h1>
          <Link to="/user/register">
            <button className='button_homepage'>Đăng ký</button>
          </Link>
          <p>Hoặc đăng ký bằng</p>
          {for(let index ; index <= 3 ; index++){
              
          }}
        </div>
      </div>
    </div>
  );
}

export default Home;
