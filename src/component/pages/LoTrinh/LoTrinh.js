
import "./loTrinh.css";
import homeBegin from "../../../images/homeBegin.png"
import homeFrontend from "../../../images/homeFrontend.png"
import homeBackend from "../../../images/homeBackend.png"
import { Link } from "react-router-dom";
import homeDataScience from "../../../images/homeScience.png"

function LoTrinh() {

    return (
        <div className="container lo-trinh">
            <div className="row">
                <div className="col-7 lt-title ">
                    <h1 className="lt-heading">Hãy chọn một mục tiêu</h1>
                    <p className="lt-content">Cho dù bạn là người mới bắt đầu hay một lập trình viên đã có kinh nghiệm đang tìm kiếm các khóa học để nâng cao kỹ năng bản thân và đạt đến mức độ cao hơn trong lập trình, lộ trình học tập này sẽ giúp bạn đạt được mục tiêu của mình.</p>
                </div>
                <div className="lt-list">
                    <div className="col-7">
                        <div className="card mb-3 lt-card">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={homeBegin} className="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div className="col-md-8 lt-card-body">
                                <div className="card-body ">
                                    <h5 className="card-title">Mới bắt đầu</h5>
                                    <Link to="/chi-tiet-lo-trinh/moi-bat-dau">
                                      <button className="btn btn-warning lt-btn" >Chi tiết</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                    <div className="card mb-3 lt-card">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={homeFrontend} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 lt-card-body">
                            <div className="card-body">
                                <h5 className="card-title">Front-end</h5>
                                <Link to="/chi-tiet-lo-trinh/front-end">
                                  <button className="btn btn-warning lt-btn" >Chi tiết</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="card mb-3 lt-card">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={homeBackend} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 lt-card-body">
                            <div className="card-body">
                                <h5 className="card-title">Back-end</h5>
                                <Link to="/chi-tiet-lo-trinh/back-end">
                                  <button className="btn btn-warning lt-btn" >Chi tiết</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="card mb-3 lt-card">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={homeDataScience} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 lt-card-body">
                            <div className="card-body">
                                <h5 className="card-title">Data Science</h5>
                                <Link to="/chi-tiet-lo-trinh/data-science">
                                   <button className="btn btn-warning lt-btn" >Chi tiết</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )
};


export default LoTrinh;