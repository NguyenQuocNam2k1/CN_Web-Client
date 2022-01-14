import { Link } from "react-router-dom";
import "./mucLuc.css";

function MucLuc(props) {
    return (
        <div className="container mt-16">
            <div className="row">

                {/* Layout */}
                <div className="col-3">
                    <div className="list-course-name">
                        <div className="title">Ngôn ngữ</div>
                        <ul className="list-name">
                            <li className="course-name">HTML & CSS</li>
                            <li className="course-name">Python</li>
                            <li className="course-name">JavaScript</li>
                            <li className="course-name">Java</li>
                            <li className="course-name">SQL</li>
                            <li className="course-name">C++</li>
                            <li className="course-name">R</li>
                            <li className="course-name">C#</li>
                        </ul>
                    </div>
                </div>

                {/*  Khoa hoc */}
                <div className="col-9">

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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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
                                        <Link to="/course" class="btn btn-primary">Đăng ký</Link>
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