import CommentDetail from "./item-comment-detail";
import { io } from "socket.io-client";
import { useState } from 'react';

function Comment(props) {
    const user = {
        name: 'Bùi Thịnh',

    }

    const socket = io();

    const [currentCmt, setCurrentCmt] = useState('');

    const commentInput = document.querySelector('.comment-input');
    const buttonCmt = document.querySelector('.btn-comment');

    const handleCmt = (cmt) => {
        if (cmt) {
            cmt = cmt.trim();
            socket.emit('chatComment', cmt);
            outputComment(cmt);
        }
    }


    /* buttonCmt.addEventListener('onClick', (e) => {

        let cmt = e.target.elements.cmt.value;

        cmt = cmt.trim();

        if (!cmt) {
            return false;
        }

        socket.emit('chatComment', cmt);

        e.target.elements.cmt.value = '';
        e.target.elements.cmt.focus();
    }); */

    socket.on('comment', comment => {
        console.log(comment);
        outputComment(comment);
    });



    const outputComment = (comment, user) => {
        const commentDetail = document.createElement('CommentDetail');
        commentDetail.setAttribute('avatar', 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp');
        commentDetail.setAttribute('name', `${user.name}`);
        commentDetail.time.add('comment.time');
        commentDetail.comment.add('comment.text');
        commentDetail.amount.add('5');
        document.querySelector('.item-comment').appendChild(commentDetail);
    }

    return (
        <div className='comment'>
            <div className='comment-question'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ "width": "40px" }}
                    alt="Avatar"
                />
                <form id='chat-comment'>
                    <input
                        id="cmt"
                        className="form-control me-2 search-input comment-input"
                        type="search"
                        placeholder="Bạn có gì thắc mắc trong bài học này?"
                        aria-label="Search"
                        onChange={e => setCurrentCmt(e.target.value)}
                    />
                </form>
                <button type='button' className='btn-app btn-comment' onClick={(e) => handleCmt(currentCmt)}>Bình luận</button>
            </div>
            <div className='comment-detail'>
                <div className='title'>Bình luận</div>

                <div className="list-comment">
                    <div className="item-comment">
                        <CommentDetail
                            avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                            name='Bùi Thịnh'
                            time='3 ngày trước'
                            comment='Ra tiếp đi a ơi :v học mấy kĩ năng này ngon quá :v'
                            amount='25'
                        />
                        <div className="comment-feedback">
                            <CommentDetail
                                avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                                name='Bùi Thịnh'
                                time='3 ngày trước'
                                comment='Ra tiếp đi a ơi :v học mấy kĩ năng này ngon quá :v'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;