import './DetailCourse.css';
import { Link, useLocation, useParams } from "react-router-dom";
import Comment from './commentAndCodePen/comment/comment';
import Coding from './commentAndCodePen/coding/coding.js';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faLock, faArrowRight, faList, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import * as dbCourseFix from "../../../data/index.js";


library.add(faCheck, faLock, faArrowRight, faList, faChevronLeft, faChevronRight);

function DetailCourse(props) {
    const { slug } = useParams();  //Thằng này là tên khóa học
    const { search } = useLocation(); //Thằng search này là id của bài học


    const [type, setType] = useState('comment');

    const linkVideo = "https://www.youtube.com/embed/tgbNymZ7vqY";
    const listCourse = JSON.parse(localStorage.getItem("LessonByCourse")) || [];

    const iconCloseMenu = document.querySelector('.svg-inline--fa.fa-arrow-right');

    const closeMenu = () => {
        const iconMenu = document.querySelector('.svg-inline--fa.fa-list');
        const tabMenu = document.querySelector('.tab-menu');
        const video = document.querySelector('.video-content');
        iconMenu.style.display = 'block';
        tabMenu.style.right = '-370px';
        video.style.width = '100%';
    }

    const openMenu = () => {
        const iconMenu = document.querySelector('.svg-inline--fa.fa-list');
        const tabMenu = document.querySelector('.tab-menu');
        const video = document.querySelector('.video-content');
        iconMenu.style.display = 'none';
        tabMenu.style.right = '0px';
        video.style.width = '75%';
    }

    //SET cho tab-menu có độ dài bằng video
    useEffect(() => {
        const tab_menu = document.querySelector(".tab-menu");
        let heighVideo = document.querySelector(".video-content").offsetHeight;
        tab_menu.style.height = heighVideo + 'px';
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div className="video-detail">
                <div className="title-video">
                    <Link to='/learning'>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                    </Link>
                    <p>{dbCourseFix[`${slug}`].course}</p>
                    <FontAwesomeIcon icon="fa-solid fa-list" onClick={openMenu} />
                </div>
                <div className="video-content">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                    <iframe
                        src={linkVideo}>
                    </iframe>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                </div>
                <div className='comment-coding'>
                    <div className='title'>
                        <p
                            className='title-comment'
                            onClick={() => {
                                setType('comment')
                                document.querySelector('.title-comment').style.borderBottom = '2px solid red';
                                document.querySelector('.title-coding').style.borderBottom = 'none';
                                document.querySelector('.comment-coding').style.width = '70%';
                            }}
                        >Bình luận</p>
                        <p
                            className='title-coding'
                            onClick={() => {
                                setType('coding')
                                document.querySelector('.title-comment').style.borderBottom = 'none';
                                document.querySelector('.title-coding').style.borderBottom = '2px solid red';
                                document.querySelector('.comment-coding').style.width = '96%';
                            }}
                        >Coding</p>
                    </div>

                    {/* Comment */}
                    {type === 'comment' ? <Comment idRoom={search.slice(4)} /> : <Coding />}
                </div>


                <div className='tab-menu'>
                    <div className='tittle-list'>
                        Nội dung khóa học
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" onClick={closeMenu} />
                    </div>
                    <ul className='list-course'>
                        {listCourse.map((course, index) => (
                            <li key={index} className='name-course'>
                                {course.name}
                                {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                                <FontAwesomeIcon icon="fa-solid fa-lock" />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default DetailCourse;