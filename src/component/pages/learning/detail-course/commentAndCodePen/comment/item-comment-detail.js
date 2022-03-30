import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

library.add(faThumbsUp, faUser);

function CommentDetail({ socket, idUser, username, room, image }) {

   const [currentCmt, setCurrentCmt] = useState("");
   const [cmtList, setCmtList] = useState([]);
   /*     const [countLike, setCountLike] = useState(false); */

   const cmtRef = useRef();

   const sendComment = () => {
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
               new Date(Date.now()).getMinutes() +
               " - " +
               new Date(Date.now()).getDate() + "/" + (new Date(Date.now()).getMonth() + 1) + "/" + new Date(Date.now()).getFullYear(),
         };

         socket.emit("send_comment", cmtData);
         setCmtList((list) => [...list, cmtData]);
         setCurrentCmt("");
      }
   };

   const sendCommentResponse = (id) => {
      console.log('id: ', id);
      if (currentCmt !== "") {
         const cmtRes = {
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

         for (let i = 0; i < cmtList.length; i++) {
            if (cmtList[i].id == id) {
               console.log('true');
               cmtList[i].cmtResponse.push(cmtRes);
            };
         };

         console.log('l:', cmtList);
         socket.emit("send_comment_response", cmtList);
         setCmtList((cmtList) => [...cmtList]);
         setCurrentCmt("");
      }
   }

   const updateCountLike = (id) => {

      const nodeAmountLike = document.querySelector(`.amount.${id}`);
      const viewLike = document.querySelector(`.amount-like.${id}`);

      for (let i = 0; i < cmtList.length; i++) {
         if (cmtList[i].id == id) {
            let liked = false;
            for (let j = 0; j < cmtList[i].countLike.length; j++) {
               if (cmtList[i].countLike[j] == idUser) {
                  cmtList[i].countLike = cmtList[i].countLike.slice(0, j).concat(cmtList[i].countLike.slice(j + 1));
                  liked = true;
               }
            };
            if (!liked) {
               cmtList[i].countLike.push(`${idUser}`);
            }

            cmtList[i].countLike.length == 0 ? viewLike.style.display = 'none' : viewLike.style.display = 'flex';
            nodeAmountLike.textContent = cmtList[i].countLike.length;
         }
      }
      socket.emit('updateLike', (cmtList));

   };

   const updateCountLikeRes = (idCmt, idCmtRes) => {
      const nodeAmountLike = document.querySelector(`.amount.${idCmtRes}`);
      const viewLike = document.querySelector(`.amount-like.${idCmtRes}`);
      cmtList.forEach(element => {
         if (element._id !== idCmt) return;
         console.log(element)
         element.cmtResponse.forEach(item => {
            if (item._id !== idCmtRes) return;
            console.log(element);
            if (!item.countLike.includes(idUser)) {
               item.countLike.push(idUser);
               console.log(item.countLike);
               socket.emit("update_count_like_cmt_res", {
                  room,
                  idCmt,
                  idCmtRes,
                  countLike: item.countLike,
               });
               return;
            }
            const newArray = item.countLike.filter((item) => item !== idUser);
            socket.emit("update_count_like_cmt_res", { room, idCmt, idCmtRes, countLike: newArray });
         })
      })
   };

   useEffect(() => {
      socket.on("receive_comment", (data) => {
         setCmtList((list) => [...list, data]);
      });

      socket.on("receive_comment_response", (data) => {
         console.log('data: ', data);
         setCmtList([...data]);
      });

      socket.on("receive_count_like_updated", (data) => {
         setCmtList([...data]);
      });
   }, [socket]);

   // set vị trí like theo độ rộng của cmt
   const list = document.querySelectorAll('.description-comment');
   for (let i = 0; i < list.length; i++) {
      if (list[i].offsetWidth > 200) {
         list[i].querySelector('.amount-like').style.bottom = '-14px';
         list[i].querySelector('.amount-like').style.right = '24px';
      }
   }

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
                        {cmt.countLike.length == 0
                           ?
                           <div className={`amount-like ${cmt.id}`} style={{ "display": "none" }}>
                              <div className="icon-like">
                                 <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                              </div>
                              <p className={`amount ${cmt.id}`}>{cmt.countLike.length}</p>
                           </div>
                           :
                           <div className={`amount-like ${cmt.id}`} style={{ "display": "flex" }}>
                              <div className="icon-like">
                                 <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                              </div>
                              <p className={`amount ${cmt.id}`}>{cmt.countLike.length}</p>
                           </div>
                        }
                     </div>
                  </div>
                  <div className="felt-feedback-time">
                     <p onClick={() => updateCountLike(`${cmt.id}`)} className="felt">Thích</p>
                     <p onClick={() => appearInputResponse(`${cmt.id}`)} className="feedback">Trả lời</p>
                     <p className="time">{cmt.time}</p>
                  </div>

                  <div className="list-comment-response">
                     {cmt.cmtResponse.map((cmtRes, index) => {
                        return (
                           <div key={index} className={cmtRes.id}>
                              <div className="item-comment-detail">
                                 <div className="comment-feedback">
                                    <img
                                       src={cmtRes.avatar}
                                       className="rounded-circle"
                                       style={{ "width": "40px" }}
                                       alt="Avatar"
                                    />
                                    <div className="description-comment">
                                       <div className="name">{cmtRes.username}</div>
                                       <div className="description">{cmtRes.content}</div>
                                       {cmtRes.countLike.length == 0
                                          ?
                                          <div className={`amount-like ${cmtRes.id}`} style={{ "display": "none" }}>
                                             <div className="icon-like">
                                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                                             </div>
                                             <p className={`amount ${cmtRes.id}`}>{cmtRes.countLike.length}</p>
                                          </div>
                                          :
                                          <div className={`amount-like ${cmtRes.id}`} style={{ "display": "flex" }}>
                                             <div className="icon-like">
                                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                                             </div>
                                             <p className={`amount ${cmtRes.id}`}>{cmtRes.countLike.length}</p>
                                          </div>
                                       }
                                    </div>
                                 </div>
                              </div>
                              <div className="felt-feedback-time response">
                                 <p onClick={() => updateCountLikeRes(`${cmt.id}`, `${cmtRes.id}`)} className="felt">Thích</p>
                                 <p onClick={() => appearInputResponse(`${cmt.id}`)} className="feedback">Trả lời</p>
                                 <p className="time">{cmtRes.time}</p>
                              </div>
                           </div>
                        )
                     })}

                     <div className="input-comment-response">
                        <img
                           src={image}
                           className="rounded-circle"
                           style={{ "width": "40px" }}
                           alt="Avatar"
                        />
                        <div className="description-comment">
                           <div className="name">{cmtRes.username}</div>
                           <div className="description">{cmtRes.content}</div>

                           <div
                              className={`amount-like ${cmtRes._id}`}
                              style={{ display: `${cmtRes.countLike.length == 0 ? "none" : "flex"}` }}
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
                     <p onClick={() => updateCountLikeRes(`${cmt._id}`, `${cmtRes._id}`)} className="felt">
                        Thích
                     </p>
                     <p onClick={() => appearInputResponse(`${cmt._id}`)} className="feedback">
                        Trả lời
                     </p>
                     <p className="time">{cmtRes.time}</p>
                  </div>
               </div>
            )
         })
         }
      </>
   )
}

export default CommentDetail;

