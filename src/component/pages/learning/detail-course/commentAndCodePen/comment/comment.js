import CommentDetail from "./item-comment-detail";
<<<<<<< HEAD
import { io } from "socket.io-client";
import { useState } from 'react';

const socket = io.connect("http://localhost:5000");

function Comment(props) {

    const user = JSON.parse(localStorage.getItem('authUser'));
    const idRoom = 'html';

    socket.emit("join_room", idRoom);

    return (
        <div className='comment'>
=======

function Comment(props) {

    return (
        <div className='comment'>
            <div className='comment-question'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ "width": "40px" }}
                    alt="Avatar"
                />
                <input
                    id="search-input"
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Bạn có gì thắc mắc trong bài học này?"
                    aria-label="Search"
                />
                <button type='button' className='btn-app'>Bình luận</button>
            </div>
>>>>>>> d10e6f167b716b9556cbc12170fa97e20366aa3c
            <div className='comment-detail'>
                <div className='title'>Bình luận</div>

                <div className="list-comment">
                    <div className="item-comment">
                        <CommentDetail
<<<<<<< HEAD
                            socket={socket} idUser={user.uid} username={user.displayName} room={idRoom} image={user.image}
                        />
                        {/* <CommentDetail
                            avatar={user.image}
                            name={user.name}
=======
                            avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                            name='Bùi Thịnh'
>>>>>>> d10e6f167b716b9556cbc12170fa97e20366aa3c
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
<<<<<<< HEAD
                        </div> */}
=======
                        </div>

>>>>>>> d10e6f167b716b9556cbc12170fa97e20366aa3c

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;