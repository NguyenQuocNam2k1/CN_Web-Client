import "./Learning.css";

import homeBegin from "../../../images/homeBegin.png"
import { Link } from "react-router-dom";



function Learning(props) {
    return (
        <div className="container learning">
            <div className="row">
                <div className="col-3">
                    <div className="card ln-card">
                        <Link className="ln-link">
                            <img src={homeBegin} className="img-fluid rounded-start ln-img" alt="..."></img>
                            <button className="btn ln-btn">Hoc tiep</button>
                        </Link>
                        
                        <div className="card-body">
                            <h5 className="card-title">Kiến Thức Nhập Môn IT</h5>
                            <p className="card-text ln-views">180.000 lượt xem</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
};

export default Learning