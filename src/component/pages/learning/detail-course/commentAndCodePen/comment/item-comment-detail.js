import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import UIUpdateAndDeleteCmt from "./UIUpdateAndDelete";

library.add(faThumbsUp, faUser);

// let test = [];
function CommentDetail({ socket, idUser, username, room, image }) {
  const [currentCmt, setCurrentCmt] = useState("");
  const [cmtList, setCmtList] = useState([]);
  const [currentResCmt, setCurrentResCmt] = useState([]);
  const [listCmtResShow, setListCmtResShow] = useState([]);

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
        time: moment().format(),
      };
      socket.emit("send_comment", cmtData);
      setCurrentCmt("");
    }
  };

  const sendCommentResponse = (_id) => {
    if (currentResCmt !== "") {
      const cmtRes = {
        _id: "ccd" + uuidv4().replace(/-/g, ""),
        idRoom: room,
        idUser: idUser,
        username: username,
        content: currentResCmt,
        avatar: image,
        countLike: [],
        time: moment().format(),
      };

      socket.emit("send_comment_response", { _id, cmtRes });
      setCurrentResCmt("");
   }
   document.querySelector(".input-comment-response").style.display = "none";
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
    cmtList.forEach((element) => {
      if (element._id !== idCmt) return;
      element.cmtResponse.forEach((item) => {
        if (item._id !== idCmtRes) return;
        if (!item.countLike.includes(idUser)) {
          item.countLike.push(idUser);
          socket.emit("update_count_like_cmt_res", {
            room,
            idCmt,
            idCmtRes,
            countLike: item.countLike,
          });
          return;
        }
        const newArray = item.countLike.filter((item) => item !== idUser);
        socket.emit("update_count_like_cmt_res", {
          room,
          idCmt,
          idCmtRes,
          countLike: newArray,
        });
      });
    });
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
      setCmtList(data);
    });
    socket.on("receive_comment", (data) => {
      setCmtList(data);
    });
  }, [room]);

  // set vị trí like theo độ rộng của cmt
  const list = document.querySelectorAll(".description-comment");
  for (let i = 0; i < list.length; i++) {
    if (list[i].offsetWidth > 200) {
      list[i].querySelector(".amount-like").style.bottom = "-14px";
      list[i].querySelector(".amount-like").style.right = "24px";
    }
  }

  const show_cmtRes = (idCmt) => {
    setListCmtResShow((pev) => [...pev, idCmt]);
  };
  const hide_cmtRes = (idCmt) => {
   setListCmtResShow((pev) => pev.filter(item => {
      return item !== idCmt
   }));
 };

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
              <div className="felt" style={{ display: "flex" }}>
                <p
                  onClick={() => updateCountLike(`${cmt._id}`)}
                  className="felt"
                >
                  {cmt.countLike.includes(idUser) ? "Bỏ thích" : "Thích"}
                </p>
                <p
                  onClick={() => appearInputResponse(`${cmt._id}`)}
                  className="feedback"
                >
                  Trả lời
                </p>
                <p className="time">{moment(`${cmt.time}`).fromNow()}</p>
              </div>
              <UIUpdateAndDeleteCmt
                rootId={""}
                id={cmt._id}
                img={cmt.avatar}
                room={room}
                socket={socket}
                idUser={idUser}
                cmtList={cmtList}
              />
            </div>

            <div className="list-comment-response" >
              {!listCmtResShow.includes(cmt._id) ? (
                cmt.cmtResponse.length == 0 ? (
                  ""
                ) : (
                  <div
                    className="cmt-response"
                  >
                    <p className="cmt-response-content" onClick={() => show_cmtRes(cmt._id)}>
                      {cmt.cmtResponse.length} phản hồi
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                      onClick={() => show_cmtRes(cmt._id)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                )
              ) : (
                <>
                <div style={{display:"flex", marginLeft:"55px"}}>
                  <p className="cmt-response-content" onClick={()=>hide_cmtRes(cmt._id)}>
                    Ẩn {cmt.cmtResponse.length} phản hồi
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                    onClick={()=>hide_cmtRes(cmt._id)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </div>
                  {cmt.cmtResponse.map((cmtRes, index) => {
                    return (
                      <div key={index} className={`a${cmtRes._id}`}>
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
                              <div className="description">
                                {cmtRes.content}
                              </div>

                              <div
                                className={`amount-like ${cmtRes._id}`}
                                style={{
                                  display: `${
                                    cmtRes.countLike.length == 0
                                      ? "none"
                                      : "flex"
                                  }`,
                                }}
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
                          <div className="felt" style={{ display: "flex" }}>
                            <p
                              onClick={() =>
                                updateCountLikeRes(
                                  `${cmt._id}`,
                                  `${cmtRes._id}`
                                )
                              }
                              className="felt"
                            >
                              {cmtRes.countLike.includes(idUser)
                                ? "Bỏ thích"
                                : "Thích"}
                            </p>
                            <p
                              onClick={() => appearInputResponse(`${cmt._id}`)}
                              className="feedback"
                            >
                              Trả lời
                            </p>
                            <p className="time">
                              {moment(`${cmtRes.time}`).fromNow()}
                            </p>
                          </div>
                          <UIUpdateAndDeleteCmt
                            rootId={cmt._id}
                            id={cmtRes._id}
                            img={cmtRes.avatar}
                            room={room}
                            socket={socket}
                            idUser={idUser}
                            cmtList={cmtList}
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              )}

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
