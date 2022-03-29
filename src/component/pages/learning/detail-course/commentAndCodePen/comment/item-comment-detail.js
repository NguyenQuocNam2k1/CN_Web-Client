import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { async } from "@firebase/util";

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
                new Date(Date.now()).getMinutes(),
        };
        socket.emit("send_comment", cmtData);
        setCurrentCmt("");
    }
};

  const sendCommentResponse =  (id) => {
    if (currentCmt !== "") {
      const cmtRes = {
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

      for (let i = 0; i < cmtList.length; i++) {
        if (cmtList[i]._id == id) {
          cmtList[i].cmtResponse.push(cmtRes);
        }
      }

      socket.emit("send_comment_response", cmtList);
      setCmtList((cmtList) => [...cmtList]);
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
            socket.emit("update_count_like", ({room, idCmt , countLike: newArray}));
        }
    });
};

  const updateCountLikeRes = async (idCmt, idCmtRes) => {
    const nodeAmountLike = document.querySelector(`.amount.${idCmtRes}`);
    const viewLike = document.querySelector(`.amount-like.${idCmtRes}`);

    for (let i = 0; i < cmtList.length; i++) {
      if (cmtList[i]._id == idCmt) {
        for (let j = 0; j < cmtList[i].cmtResponse.length; j++) {
          let liked = false;
          if (cmtList[i].cmtResponse[j]._id == idCmtRes) {
            for (
              let k = 0;
              k < cmtList[i].cmtResponse[j].countLike.length;
              k++
            ) {
              if (cmtList[i].cmtResponse[j].countLike[k] == idUser) {
                cmtList[i].cmtResponse[j].countLike = cmtList[i].cmtResponse[
                  j
                ].countLike
                  .slice(0, k)
                  .concat(cmtList[i].cmtResponse[j].countLike.slice(k + 1));
                liked = true;
              }
            }
            if (!liked) {
              cmtList[i].cmtResponse[j].countLike.push(`${idUser}`);
            }
            cmtList[i].cmtResponse[j].countLike.length == 0
              ? (viewLike.style.display = "none")
              : (viewLike.style.display = "flex");
            nodeAmountLike.textContent =
              cmtList[i].cmtResponse[j].countLike.length;
          }
        }
      }
    }
    await socket.emit("updateLike", cmtList);
  };

  const appearInputResponse = (id) => {
    document
      .querySelector(`div.a${id}`)
      .querySelector(".input-comment-response").style.display = "flex";
    cmtRef.current.focus();
  };

  useEffect(() => {
    socket.emit("get_comment", room);
    socket.on("receive_all_comment", (data) => setCmtList(data));

    socket.on("receive_comment", (data) =>
      setCmtList((list) => [...list, data])
    );
  }, []);

  // set vị trí like theo độ rộng của cmt
  const list = document.querySelectorAll(".description-comment");
  for (let i = 0; i < list.length; i++) {
    if (list[i].offsetWidth < 200) {
      list[i].querySelector(".amount-like").style.bottom = "8px";
      list[i].querySelector(".amount-like").style.right = "-26px";
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
                {cmt.countLike.length == 0 ? (
                  <div
                    className={`amount-like ${cmt._id}`}
                    style={{ display: "none" }}
                  >
                    <div className="icon-like">
                      <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    </div>
                    <p className={`amount ${cmt._id}`}>
                      {cmt.countLike.length}
                    </p>
                  </div>
                ) : (
                  <div
                    className={`amount-like ${cmt._id}`}
                    style={{ display: "flex" }}
                  >
                    <div className="icon-like">
                      <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    </div>
                    <p className={`amount ${cmt._id}`}>
                      {cmt.countLike.length}
                    </p>
                  </div>
                )}
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
                          {cmtRes.countLike.length == 0 ? (
                            <div
                              className={`amount-like ${cmtRes._id}`}
                              style={{ display: "none" }}
                            >
                              <div className="icon-like">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                              </div>
                              <p className={`amount ${cmtRes._id}`}>
                                {cmtRes.countLike.length}
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`amount-like ${cmtRes._id}`}
                              style={{ display: "flex" }}
                            >
                              <div className="icon-like">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                              </div>
                              <p className={`amount ${cmtRes._id}`}>
                                {cmtRes.countLike.length}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="felt-feedback-time response">
                      <p
                        onClick={() =>
                          updateCountLikeRes(`${cmt._id}`, `${cmtRes._id}`)
                        }
                        className="felt"
                      >
                        Thích
                      </p>
                      <p
                        onClick={() => appearInputResponse(`${cmt._id}`)}
                        className="feedback"
                      >
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
                  onClick={(e) => sendCommentResponse(cmt._id)}
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
