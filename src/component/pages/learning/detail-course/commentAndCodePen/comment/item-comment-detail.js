
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

library.add(faThumbsUp, faUser);

function CommentDetail({ socket, idUser, username, room, image }) {

    const [currentCmt, setCurrentCmt] = useState("");
    const [cmtList, setCmtList] = useState([]);
    /*     const [countLike, setCountLike] = useState(false); */

    const sendComment = async () => {
        if (currentCmt !== "") {
            const cmtData = {
                id: 'a' + Math.floor(Math.random() * 1000000),
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

            await socket.emit("send_comment", cmtData);
            setCmtList((list) => [...list, cmtData]);
            setCurrentCmt("");
        }
    };

    const updateCountLike = async (id) => {

        const nodeAmountLike = document.querySelector(`.amount.${id}`);

        for (let i = 0; i < cmtList.length; i++) {
            if (cmtList[i].id == id) {

/*                 const data = {
                    cmt: cmtList[i],
                    id: id,
                    idUser: idUser,
                }; */
                let liked = false;
                for (let j = 0; j < cmtList[i].countLike.length; j++) {
                    if (cmtList[i].countLike[j] == idUser) {
                        cmtList[i].countLike = cmtList[i].countLike.slice(0, j).concat(cmtList[i].countLike.slice(j + 1));
                        liked = true;
                        setCmtList(cmtList)
                    }
                };
                if (!liked) {
                    cmtList[i].countLike.push(`${idUser}`);
                    setCmtList(cmtList)
                }
                nodeAmountLike.textContent = cmtList[i].countLike.length;
                await socket.emit('updateLike', (cmtList[i]));
            }
        }
     
        setCmtList(cmtList);
    };

 
    useEffect(() => {
        socket.on("receive_comment", (data) => {
            setCmtList((list) => [...list, data]);
        
        });

        socket.on("receive_count_like_updated", (data) => {
            
          
            const nodeAmountLike = document.querySelector(`.amount.${data.id}`);
            nodeAmountLike.textContent = data.countLike.length;
            /* let liked = false;
            for (let j = 0; j < data.cmt.countLike.length; j++) {
                if (data.cmt.countLike[j] == data.idUser) {
                    data.cmt.countLike = data.cmt.countLike.slice(0, j).concat(data.cmt.countLike.slice(j + 1));
                    liked = true;
                }
            };
            if (!liked) {
                data.cmt.countLike.push(`${data.idUser}`);
            }

            const nodeAmountLike = document.querySelector(`.amount.${data.id}`);
            nodeAmountLike.textContent = data.cmt.countLike.length; */

            console.log('cmtListeff: ', cmtList);

        });
    }, [socket]);

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
            {cmtList.map((cmt, index) => {
                return (
                    <div key={index} className={cmt.id}>
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
                                    <p className={`amount ${cmt.id}`}>{cmt.countLike.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="felt-feedback-time">
                            <p onClick={() => updateCountLike(`${cmt.id}`)} className="felt">Thích</p>
                            <p className="feedback">Trả lời</p>
                            <p className="time">{cmt.time}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default CommentDetail;