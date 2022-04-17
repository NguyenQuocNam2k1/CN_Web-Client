import "./homepage.css";
import { Link } from "react-router-dom";
import slide1 from "../../../images/Slide1.png"
import slide2 from "../../../images/Slide2.png"
import slide3 from "../../../images/Slide3.png"



function Home(props) {
      var myIndex = 0;
      carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1] ? x[myIndex-1].style.display = "block" : "";  
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
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
            <div className="col-md-5">
              <div className="homepage_layout_2_left" data-aos="fade-up-right">
                <div>
                  <h1>
                    MỤC TIÊU <br /> của bạn là gì?
                  </h1>
                  <p>
                    Một trong những điều quan trọng nhất bạn cần làm khi học lập
                    trình đó là xác định đúng mục tiêu học tập của mình.
                  </p>
                  <Link to="/lo-trinh">
                  <button className="btn-app btn-app-layout_2">
                    Xem chi tiết
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="row">
                <div className="background_1_layout_2 col-6" data-aos="fade-down">
                  <div>
                    <Link to="/chi-tiet-lo-trinh/moi-bat-dau">
                      <button>Beginner</button>
                    </Link>
                  </div>
                </div>
                <div className="background_2_layout_2 col-6" data-aos="fade-down">
                  <div>
                  <Link to="/chi-tiet-lo-trinh/data-science">
                    <button>Data</button>
                    </Link>
                  </div>
                </div>
                <div className="background_3_layout_2 col-6" data-aos="fade-up">
                  <div>
                  <Link to="/chi-tiet-lo-trinh/front-end">
                    <button>Front-end</button>
                  </Link>
                  </div>
                </div>
                <div className="background_4_layout_2 col-6" data-aos="fade-up">
                  <div>
                  <Link to="/chi-tiet-lo-trinh/back-end">
                    <button>Back-end</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage_layout_5">
          <div className="row">
            <div className="col-md-6">
              <div className="homepage_layout_5_left">
                <div className="background_layout_5" data-aos="fade-up-right"></div>
              </div>
            </div>
            <div className="col-md-6 homepage_layout_5_right" data-aos="fade-up-left">
              <div>
                <h1>Bạn đang là học viên của CoCoders?</h1>
                <Link to="/lo-trinh">
                <button className="btn-app-layout_2 btn-app"
                  style={{
                    "borderRadius": "30px",
                    "width": "290px",
                    "height": "48px"
                  }}>
                  Xem khóa đang học
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage_layout_3">
        <div className="w3-content w3-section">
          <div className="mySlides">
            <div className="row slide-child">
              <div className="col-md-4">
                <div className="slide-content">
                  <img className="slide-img" src={slide1} />
                  <div className="slide-if">
                    Mr Do Khanh Tu <br></br>
                    Software Engineer at Amazon
                  </div>
                </div>
              </div>
              <div className="col-md-8 abc">
                <p className="slide-text">"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on Cocoders. Within a year I had a six-figure job as a Software Engineer. CoCoders changed my life." </p>
              </div>
            </div>
          </div>  
          <div className="mySlides">
            <div className="row slide-child">
            <div className="col-md-8 abc">
                <p className="slide-text">I've always struggled with learning JavaScript. I've taken many courses but Cocoders's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on Cocoders gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify. </p>
              </div>
              <div className="col-md-4">
                <div className="slide-content">
                  <img className="slide-img" src={slide2} />
                  <div className="slide-if">
                    Ms Wendy <br></br>
                    Software Engineer at Spotify
                  </div>
                </div>
              </div>
              
            </div>
          </div>  

          <div className="mySlides">
            <div className="row slide-child">
              <div className="col-md-4">
                <div className="slide-content">
                  <img className="slide-img" src={slide3} />
                  <div className="slide-if">
                    Ms Tu Anh <br></br>
                    Software Engineer at Microsoft
                  </div>
                </div>
              </div>
              <div className="col-md-8 abc">
                <p className="slide-text">Cocoders was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="homepage_layout_4">
        <div className="container">
          <div className="row">
            <div className="col-m-6 col-6 homepage_layout_4_image" data-aos="fade-up-right"></div>
            <div className="col-md-6 col-6 homepage_layout_4_text" data-aos="fade-up-left">
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


// import "./homepage.css";
// import { Link } from "react-router-dom";
// import slide1 from "../../../images/Slide1.png"
// import slide2 from "../../../images/Slide2.png"
// import slide3 from "../../../images/Slide3.png"



// function Home(props) {
//       var myIndex = 0;
//       carousel();

//     function carousel() {
//       var i;
//       var x = document.getElementsByClassName("mySlides");
//       for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"; 
//       }
//       myIndex++;
//       if (myIndex > x.length) {myIndex = 1}    
//       x[myIndex-1] ? x[myIndex-1].style.display = "block" : "";  
//       setTimeout(carousel, 2000); // Change image every 2 seconds
//     }
//   return (
//     <>
//       <div className="container homepage-container">
//         <div className="row homepage_layout_1">
//           <div className="col-lg-6 col-sm-12 homepage_layout_1_image">
//             <div data-aos="fade-right"></div>
//             {/* Thẻ div bên trên là chứa background. yêu cầu không ai được xóa */}
//           </div>
//           <div className="col-lg-6 homepage_layout_1_layout" data-aos="fade-left">
//             <h1>Tham gia học MIỄN PHÍ</h1>
//             <Link to="/user/register" style={{ "paddingLeft": "45px" }}>
//               <button className="button_homepage">Đăng ký</button>
//             </Link>
//             <p>Hoặc đăng ký bằng</p>
//             <div className="list_logo">
//               <div className="logo logo_gg"></div>
//               <div className="logo logo_facebook"></div>
//               <div className="logo logo_github"></div>
//             </div>
//           </div>
//         </div>
//         <div className="homepage_layout_2">
//           <div className="row">
//             <div className="col-md-5">
//               <div className="homepage_layout_2_left" data-aos="fade-up-right">
//                 <div>
//                   <h1>
//                     MỤC TIÊU <br /> của bạn là gì?
//                   </h1>
//                   <p>
//                     Một trong những điều quan trọng nhất bạn cần làm khi học lập
//                     trình đó là xác định đúng mục tiêu học tập của mình.
//                   </p>
//                   <Link to="/chi-tiet-lo-trinh/data-science">
//                   <button className="btn-app btn-app-layout_2">
//                     Xem chi tiết
//                   </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-7">
//               <div className="row">
//                 <div className="background_1_layout_2 col-6" data-aos="fade-down">
//                   <div>
//                   <Link to="/chi-tiet-lo-trinh/moi-bat-dau">
//                     <button>Beginner</button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="background_2_layout_2 col-6" data-aos="fade-down">
//                   <div>
//                   <Link to="/chi-tiet-lo-trinh/data-science">
//                     <button>Data</button>
//                   </Link>
//                   </div>
//                 </div>
//                 <div className="background_3_layout_2 col-6" data-aos="fade-up">
//                   <div>
//                   <Link to="/chi-tiet-lo-trinh/front-end">
//                     <button>Front-end</button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="background_4_layout_2 col-6" data-aos="fade-up">
//                   <div>
//                     <Link to="/chi-tiet-lo-trinh/back-end">
//                       <button>Back-end</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="homepage_layout_5">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="homepage_layout_5_left">
//                 <div className="background_layout_5" data-aos="fade-up-right"></div>
//               </div>
//             </div>
//             <div className="col-md-6 homepage_layout_5_right" data-aos="fade-up-left">
//               <div>
//                 <h1>Bạn đang là học viên của CoCoders?</h1>
//                 <Link to="/user/register">
//                 <button className="btn-app-layout_2 btn-app"
//                   style={{
//                     "borderRadius": "30px",
//                     "width": "290px",
//                     "height": "48px"
//                   }}>

//                   Xem khóa đang học
//                 </button>
//                     </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="homepage_layout_3">
//         <div className="w3-content w3-section">
//           <div className="mySlides">
//             <div className="row slide-child">
//               <div className="col-md-4">
//                 <div className="slide-content">
//                   <img className="slide-img" src={slide1} />
//                   <div className="slide-if">
//                     Mr Do Khanh Tu <br></br>
//                     Software Engineer at Amazon
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-8 abc">
//                 <p className="slide-text">"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on Cocoders. Within a year I had a six-figure job as a Software Engineer. CoCoders changed my life." </p>
//               </div>
//             </div>
//           </div>  
//           <div className="mySlides">
//             <div className="row slide-child">
//             <div className="col-md-8 abc">
//                 <p className="slide-text">I've always struggled with learning JavaScript. I've taken many courses but Cocoders's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on Cocoders gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify. </p>
//               </div>
//               <div className="col-md-4">
//                 <div className="slide-content">
//                   <img className="slide-img" src={slide2} />
//                   <div className="slide-if">
//                     Ms Wendy <br></br>
//                     Software Engineer at Spotify
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//           </div>  

//           <div className="mySlides">
//             <div className="row slide-child">
//               <div className="col-md-4">
//                 <div className="slide-content">
//                   <img className="slide-img" src={slide3} />
//                   <div className="slide-if">
//                     Ms Tu Anh <br></br>
//                     Software Engineer at Microsoft
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-8 abc">
//                 <p className="slide-text">Cocoders was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." </p>
//               </div>
//             </div>
//           </div> 
//         </div>
//       </div>
//       <div className="homepage_layout_4">
//         <div className="container">
//           <div className="row">
//             <div className="col-m-6 homepage_layout_4_image" data-aos="fade-up-right"></div>
//             <div className="col-md-6 homepage_layout_4_text" data-aos="fade-up-left">
//               <h1>Tham gia ngay thôi!</h1>
//               <p>
//                 Nếu đã xem tới đây thì bạn chắc hẳn bạn đã khá tò mò rồi nhỉ.
//                 Đăng ký ngay để học và hoàn thành mục tiêu thôi nào
//               </p>
//               <Link to="/user/register">
//                 <button className="button_homepage">Đăng ký</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;