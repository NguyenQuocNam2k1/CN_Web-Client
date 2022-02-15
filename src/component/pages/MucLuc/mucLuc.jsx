import { Link } from "react-router-dom";
import "./mucLuc.css";

function MucLuc(props) {
    console.log(window.screen.height);
    return (
        <div className="container mt-16 muc-luc">
            <div className="row">

                {/* Layout */}
                <div className="col-3 list-name">
                    <div className="list-course-name">
                        <div className="title">Ngôn ngữ</div>
                        <ul className="list-name">

                            <li className="course-name">
                                <p>HTML & CSS</p>
                                <ul className="list-name-children">
                                    <Link to="/">
                                        <li className="course-children">HTML basic</li>
                                    </Link>
                                    <Link to="/">
                                        <li className="course-children">HTML nâng cao</li>
                                    </Link>
                                </ul>
                            </li>

                            <li className="course-name">
                                <p>Python</p>
                            </li>

                            <li className="course-name">
                                <p>JavaScript</p>
                            </li>

                            <li className="course-name">
                                <p>Java</p>
                            </li>

                            <li className="course-name">
                                <p>SQL</p>
                            </li>

                            <li className="course-name">
                                <p>C++</p>
                            </li>

                            <li className="course-name">
                                <p>R</p>
                            </li>

                            <li className="course-name">
                                <p>C#</p>
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
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item course */}
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item course */}
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item course */}
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item course */}
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item course */}
                        <div className="col-4 item-course">
                            <div className="card course">
                                <Link to="/cource">
                                    <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg" className="card-img-top" alt="..."></img>
                                </Link>
                                <div className="card-body body-course">
                                    <Link to="/course">
                                        <h5 className="card-title title-course">Name Course</h5>
                                    </Link>
                                    <p className="card-text description-course">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="submit-course">
                                        <Link to="/course" className="btn btn-primary">Đăng ký</Link>
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

export default MucLuc;