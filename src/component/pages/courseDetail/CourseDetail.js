import "./courseDetail.css";
import { HTML_CSS_ZH } from "../../data/index.js";
import { Link } from "react-router-dom";


function courseDetail (props) {
    const listReview = HTML_CSS_ZH.review.map((r, index) => {
        return (<li key={index}>{r}</li>)
    }
    ) 
    const listRequire = HTML_CSS_ZH.require.map((req, index) => {
        return (<li key={index}>{req}</li>)
    })
    const listContent = HTML_CSS_ZH.contents.map((content, index) => {
        return (
            <div className="cd-body-lesson-1" key={index}><Link to="#">{content}</Link></div>)
    })
    return (
        <div className="course-detail">
            <div className="cd-header">
                <h2 className="cd-header-title">HTML & CSS</h2>
                <button className="btn-app-y">Vào học</button>
            </div>
            <div className="row cd-body">
                <div className="col-8 cd-body-left">
                    <div className="row cd-body-course">
                        <div className="col-12 cd-body-learn">
                            <h3 className="cd-body-title">Bạn sẽ học được gì?</h3>
                            <ul>
                                {listReview}
                            </ul>
                        </div>
                        <div className="col-12 cd-body-description">
                            <h3 className="cd-body-title">Yêu cầu</h3>
                            <ul>
                                {listRequire}
                            </ul>
                        </div>
                        <div className="col-12 cd-body-content">
                            <h3 className="cd-body-title">Nội dung khóa học</h3>
                            <div className="cd-body-lesson">
                                {listContent}
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="col-4 cd-body-count">
                    <div className="cbc cd-body-count-user">Có <br /><p className="number">120.000</p><br /> người đã học khoá này</div>
                    <div className="cbc cd-body-count-time">Thời gian hoàn thành khoá học <br /><p className="number">9 giờ</p></div>
                </div>
            </div>            
        </div>

    )
}

export default courseDetail;