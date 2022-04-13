import { useEffect, useState } from "react";
import CommentDetail from "./item-comment-detail";


function Comment(props) {

    const { idRoom , socket, user} = props;
    socket.emit("join_room", idRoom);

    return (
        <div className='comment'>
            <div className='comment-detail'>
                <div className='title'>Bình luận</div>

                <div className="list-comment">
                    <div className="item-comment">
                        <CommentDetail
                            socket={socket} idUser={user._id} username={user.username} room={idRoom} image={user.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;