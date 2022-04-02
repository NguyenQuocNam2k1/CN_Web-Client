import CommentDetail from "./item-comment-detail";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
//  const socket = io.connect("https://cn-web.herokuapp.com");

function Comment(props) {

    const user = JSON.parse(localStorage.getItem('authUser'))[0];
    const { idRoom } = props;

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