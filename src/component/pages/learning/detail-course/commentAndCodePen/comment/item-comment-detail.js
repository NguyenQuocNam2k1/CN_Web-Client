import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

library.add(faThumbsUp, faUser);

function CommentDetail({ socket, idUser, username, room, image }) {
  const [currentCmt, setCurrentCmt] = useState("");
  const [cmtList, setCmtList] = useState([]);
  const [currentResCmt, setCurrentResCmt] = useState([]);

  /*     const [countLike, setCountLike] = useState(false); */

  const cmtRef = useRef();

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
          new Date(Date.now()).getMinutes() +
          " - " +
          new Date(Date.now()).getDate() +
          "/" +
          (new Date(Date.now()).getMonth() + 1) +
          "/" +
          new Date(Date.now()).getFullYear(),
      };
      socket.emit("send_comment", cmtData);
      setCurrentCmt("");
    }
  };

  const sendCommentResponse = (_id) => {
    if (currentResCmt !== "") {
      const cmtRes = {
        _id: "ccd" + uuidv4().replace(/-/g, ''),
        idRoom: room,
        idUser: idUser,
        username: username,
        content: currentResCmt,
        avatar: image,
        countLike: [],
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes() +
          " - " +
          new Date(Date.now()).getDate() +
          "/" +
          (new Date(Date.now()).getMonth() + 1) +
          "/" +
          new Date(Date.now()).getFullYear(),
      };
  
      socket.emit("send_comment_response", { _id, cmtRes });
      setCurrentResCmt("");
    }
  };

  const updateCountLike = (idCmt) => {
    cmtList.forEach((element) => {
      if (element._id === idCmt) {
        if (!element.countLike.includes(idUser)) {
          element.countLike.push(idUser);
          socket.emit("update_count_like", {
            room,
            idCmt,
            countLike: element.countLike,
          });
          return;
        }
        const newArray = element.countLike.filter((item) => item !== idUser);
        socket.emit("update_count_like", { room, idCmt, countLike: newArray });
      }
    });
  };

  const updateCountLikeRes = async (idCmt, idCmtRes) => {
    const nodeAmountLike = document.querySelector(`.amount.${idCmtRes}`);
    const viewLike = document.querySelector(`.amount-like.${idCmtRes}`);

    cmtList.forEach(element => {
      if(element._id !== idCmt) return;
      if()
    })
  };

  const appearInputResponse = (id) => {
    document
      .querySelector(`div.a${id}`)
      .querySelector(".input-comment-response").style.display = "flex";
    cmtRef.current.focus();
  };

  useEffect(() => {
    socket.emit("get_comment", room);
    socket.on("receive_all_comment", (data) => {
      setCmtList(data.reverse());
    });
    socket.on("receive_comment", (data) =>
      setCmtList((list) => [data, ...list])
    );
  }, []);

  // set vị trí like theo độ rộng của cmt
  const list = document.querySelectorAll(".description-comment");
  for (let i = 0; i < list.length; i++) {
    if (list[i].offsetWidth > 200) {
      list[i].querySelector(".amount-like").style.bottom = "-14px";
      list[i].querySelector(".amount-like").style.right = "24px";
    }
  }

  return (
    <>
      <div className="comment-question">
        <img
          src={image}
          className="rounded-circle"
          style={{ width: "40px" }}
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
        <button className="btn-app btn-comment" onClick={sendComment}>
          Bình luận
        </button>
      </div>
      {cmtList.map((cmt, index) => {
        return (
          <div key={index} className={`a${cmt._id}`}>
            <div className="item-comment-detail">
              <img
                src={cmt.avatar}
                className="rounded-circle"
                style={{ width: "40px" }}
                alt="Avatar"
              />
              <div className="description-comment">
                <div className="name">{cmt.username}</div>
                <div className="description">{cmt.content}</div>

                <div
                  className={`amount-like ${cmt._id}`}
                  style={{
                    display: `${cmt.countLike.length == 0 ? "none" : "flex"}`,
                  }}
                >
                  <div className="icon-like">
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                  </div>
                  <p className={`amount ${cmt._id}`}>{cmt.countLike.length}</p>
                </div>
              </div>
            </div>
            <div className="felt-feedback-time">
              <p onClick={() => updateCountLike(`${cmt._id}`)} className="felt">
                Thích
              </p>
              <p
                onClick={() => appearInputResponse(`${cmt._id}`)}
                className="feedback"
              >
                Trả lời
              </p>
              <p className="time">{cmt.time}</p>
            </div>

            <div className="list-comment-response">
              {cmt.cmtResponse.map((cmtRes, index) => {
                return (
                  <div key={index} className={cmtRes._id}>
                    <div className="item-comment-detail">
                      <div className="comment-feedback">
                        <img
                          src={cmtRes.avatar}
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          alt="Avatar"
                        />
                        <div className="description-comment">
                          <div className="name">{cmtRes.username}</div>
                          <div className="description">{cmtRes.content}</div>

                          <div
                            className={`amount-like ${cmtRes._id}`}
                            style={{display: `${cmtRes.countLike.length == 0 ? "none" : "flex"}`}}
                          >
                            <div className="icon-like">
                              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                            </div>
                            <p className={`amount ${cmtRes._id}`}>
                              {cmtRes.countLike.length}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="felt-feedback-time response">
                      <p onClick={() =>updateCountLikeRes(`${cmt._id}`, `${cmtRes._id}`)}className="felt">
                        Thích
                      </p>
                      <p onClick={() => appearInputResponse(`${cmt._id}`)}  className="feedback">
                        Trả lời
                      </p>
                      <p className="time">{cmtRes.time}</p>
                    </div>
                  </div>
                );
              })}

              <div className="input-comment-response">
                <img
                  src={image}
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt="Avatar"
                />
                <input
                  ref={cmtRef}
                  className="form-control me-2 search-input comment-input"
                  type="text"
                  value={currentResCmt}
                  placeholder="Bạn có gì thắc mắc trong bài học này?"
                  onChange={(event) => {
                    setCurrentResCmt(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    event.key === "Enter" && sendCommentResponse(cmt._id);
                  }}
                />
                <button
                  className="btn-app btn-comment"
                  onClick={() => sendCommentResponse(cmt._id)}
                >
                  Bình luận
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentDetail;
