
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

library.add(faThumbsUp, faUser);

function CommentDetail(props) {

    const { socket, idUser, username, room, image } = props;
    const [currentCmt, setCurrentCmt] = useState("");
    const [cmtList, setCmtList] = useState([]);
 

    const sendComment = () => {
        if (currentCmt !== "") {
            const cmtData = {
                idRoom: room,
                idUser: idUser,
                username: username,
                content: currentCmt,
                avatar: image,
                cmtResponse: [],
                countLike: [],
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            socket.emit("send_comment", cmtData);
            setCurrentCmt("");
        }
    };

    const updateCountLike =  (idCmt) => {
        cmtList.forEach(element => {
            if(element._id === idCmt){
                if(!element.countLike.includes(idUser)){
                    element.countLike.push(idUser);
                    socket.emit("update_count_like", ({room, idCmt , countLike: element.countLike}));
                    return;
                }
                const newArray = element.countLike.filter(item => item !== idUser);
                console.log(newArray);
                socket.emit("update_count_like", ({room, idCmt , countLike: newArray}));
            }
        });
    };

 
    useEffect(() => {
        socket.emit("get_comment", room);
        socket.on("receive_all_comment", data => setCmtList(data));

        socket.on("receive_comment", data => setCmtList((list) => [...list, data]));

    }, []);

    return (
        <>
            <div className="comment-question">
                <img
                    src={image}
                    className="rounded-circle"
                    style={{ "width": "40px" }}
                    alt="Avatar"
                />
                <input
                    className="form-control me-2 search-input comment-input"
                    type="text"
                    value={currentCmt}
                    placeholder="Bạn có gì thắc mắc trong bài học này?"
                    onChange={(event) => {
                        setCurrentCmt(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendComment();
                    }}
                />
                <button className='btn-app btn-comment' onClick={sendComment}>Bình luận</button>
            </div>
            {cmtList.length === 0 ? <></> : cmtList.map((cmt, index) => {
                let key = cmt._id;
                return (
                    <div key={index} className={cmt._id}>
                        <div className="item-comment-detail">
                            <img
                                src={cmt.avatar}
                                className="rounded-circle"
                                style={{ "width": "40px" }}
                                alt="Avatar"
                            />
                            <div className="description-comment">
                                <div className="name">{cmt.username}</div>
                                <div className="description">{cmt.content}</div>
                                <div className="amount-like ">
                                    <div className="icon-like">
                                        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                                    </div>
                                    <p className={`amount ${cmt._id}`}>{cmt.countLike.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="felt-feedback-time">
                            <p onClick={() => updateCountLike(cmt._id)} className="felt">Thích</p>
                            <p className="feedback">Trả lời</p>
                            <p className="time">{cmt.time}</p>
                        </div>
                    </div>
                );
            })
            }
        </>
    )
}

export default CommentDetail;