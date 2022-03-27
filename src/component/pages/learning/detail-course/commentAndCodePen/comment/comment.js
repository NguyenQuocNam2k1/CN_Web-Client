import CommentDetail from "./item-comment-detail";
import { io } from "socket.io-client";
import { useState } from 'react';

const socket = io.connect("http://localhost:5000");

function Comment(props) {


    const user = JSON.parse(localStorage.getItem('authUser'));
    const idRoom = 'html';

    socket.emit("join_room", idRoom);

    return (
        <div className='comment'>
            <div className='comment-detail'>
                <div className='title'>Bình luận</div>

                <div className="list-comment">
                    <div className="item-comment">
                        <CommentDetail
                            socket={socket} idUser={user.uid} username={user.displayName} room={idRoom} image={user.image}
                        />
                        {/* <CommentDetail
                            avatar={user.image}
                            name={user.name}
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
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;