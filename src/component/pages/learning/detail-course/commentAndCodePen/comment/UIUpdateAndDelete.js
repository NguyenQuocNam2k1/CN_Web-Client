import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsis, faFlag } from "@fortawesome/free-solid-svg-icons";
import './UIUpdateAndDelete.css';
import { useState, useRef } from "react";

library.add(faEllipsis, faFlag);

function UIUpdateAndDeleteCmt({ rootId, id, img, room, socket, idUser, cmtList }) {
  const [cmtUpdate, setCmtUpdate] = useState('');
  const [checkUser, setCheckUser] = useState(false);

  const cmtRef = useRef();

  function appearChoose(rootId, id, idUser, cmtList) {
    let currentCmt = cmtList.find(cmt => cmt._id === id);
    if (!currentCmt) {
      currentCmt = cmtList.find(cmt => cmt._id === rootId);
      currentCmt = currentCmt.cmtResponse.find(cmt => cmt._id === id);
    }
    if (currentCmt.idUser === idUser) {
      setCheckUser(true);
    }
    else {
      setCheckUser(false);
    }
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector(`.modal-background-${id}`).style.display = 'block';

  };

  function closeIcon(id) {
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector(`.modal-background-${id}`).style.display = 'none';
  };

  function handleClickUpdateCmt(rootId, id) {
    const currentValue = document.querySelector(`.a${id}`).querySelector('.description').innerHTML;
    const inputUpdate = document.querySelector(`.a${id}`).querySelector('.input-comment-update');
    const inputRes = document.querySelector(`.a${id}`).querySelector('.input-comment-res');

    document.querySelector(`.a${id}`).querySelector('.description-comment').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector('.iconUpdateOrDelete').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector('img').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector(`.modal-background-${id}`).style.display = 'none';
    if (rootId) {
      if (inputUpdate) {
        inputUpdate.className = 'input-comment-res';
      }
      document.querySelector(`.a${id}`).querySelector('.input-comment-res').style.display = 'flex';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time.response').style.flexDirection = 'column-reverse';
    }
    else {
      if (inputRes) {
        inputRes.className = 'input-comment-update';
      }
      inputUpdate.style.display = 'flex';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time').style.flexDirection = 'column-reverse';
    }
    setCmtUpdate(currentValue);
    cmtRef.current.focus();
  }

  function updateCmt(rootId, id, room) {
    const newCmt = cmtUpdate.trim();
    const currentValue = document.querySelector(`.a${id}`).querySelector('.description').innerHTML.trim();

    if (newCmt === currentValue) {
      alert('Bạn chưa thay đổi comment? Hãy thay đổi comment hoặc chọn hủy!!!');
      /* huyUpdateCmt(rootId, id) */
    }

    if (!rootId) {
      socket.emit('update_content', { id, newCmt, room });
      document.querySelector(`.a${id}`).querySelector('.input-comment-update').style.display = 'none';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time').style.flexDirection = 'row';
    }

    else {
      socket.emit('update_content_response', { rootId, id, newCmt, room });
      document.querySelector(`.a${id}`).querySelector('.input-comment-res').style.display = 'none';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time.response').style.flexDirection = 'row';
    }
    document.querySelector(`.a${id}`).querySelector('.description-comment').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.iconUpdateOrDelete').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('img').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.description-comment').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector(`.modal-background-${id}`).style.display = 'none';
    setCmtUpdate('');
  };

  function huyUpdateCmt(rootId, id) {
    if (!rootId) {
      document.querySelector(`.a${id}`).querySelector('.input-comment-update').style.display = 'none';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time').style.flexDirection = 'row';
    }
    else {
      document.querySelector(`.a${id}`).querySelector('.input-comment-res').style.display = 'none';
      document.querySelector(`.a${id}`).querySelector('.felt-feedback-time.response').style.flexDirection = 'row';
    }
    document.querySelector(`.a${id}`).querySelector('.description-comment').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.iconUpdateOrDelete').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('img').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.description-comment').style.display = 'block';
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'none';
    document.querySelector(`.a${id}`).querySelector(`.modal-background-${id}`).style.display = 'none';
  }

  function deleteCmt(rootId, id, room) {
    if (!rootId) {
      socket.emit('delete-comment', { id, room });
    }
    else {
      socket.emit('delete-comment-res', { rootId, id, room });
    }
    document.querySelector(`.a${id}`).querySelector('.updateAndDelete').style.display = 'none';
    document.querySelector(`.modal-background-${id}`).style.display = 'none';
  }

  function handleClickReportCmt(e, id) {
    e.target.style.color = 'red';
    e.target.querySelector('svg').style.color = 'red';
  }

  return (
    <>
      <div className="input-comment-update">
        <img
          src={img}
          className="rounded-circle"
          style={{ width: "40px" }}
          alt="Avatar"
        />
        <input
          ref={cmtRef}
          className="form-control me-2 search-input comment-input"
          type="text"
          value={cmtUpdate}
          placeholder="Bạn có gì thắc mắc trong bài học này?"
          onChange={(event) => {
            setCmtUpdate(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && updateCmt(rootId, id, room);
          }}
        />
        <button className="btn-app btn-comment" style={{ backgroundColor: '#dc3545' }} onClick={() => updateCmt(rootId, id, room)}>
          Lưu thay đổi
        </button>
        <button className="btn-app btn-huy-comment" style={{ marginLeft: '10px' }} onClick={() => huyUpdateCmt(rootId, id)}>
          Hủy
        </button>
      </div>

      <div className="iconUpdateOrDelete" onClick={() => appearChoose(rootId, id, idUser, cmtList)}>
        <FontAwesomeIcon icon="fa-solid fa-ellipsis" />

        {checkUser ?
          <div className="updateAndDelete">
            <li className="update">
              <button className="updateOrDelete update" data-bs-dismiss="modal" type="button" onClick={() => handleClickUpdateCmt(rootId, id)}>Sửa</button>
            </li>
            <li className="delete">
              <button type="button" className="updateOrDelete delete" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target={`#a${id}`} onClick={() => closeIcon(id)}>
                Xóa
              </button>
            </li>
          </div>
          :
          <div className="updateAndDelete" style={{ bottom: "-26px" }}>
            <div className="report-comment">
              <li className="updateOrDelete report" onClick={(e) => handleClickReportCmt(e, id)}>
                <FontAwesomeIcon icon="fa-solid fa-flag" />
                Báo cáo
              </li>
            </div>
          </div>
        }
      </div>

      <div className="modal fade" id={`a${id}`} tabIndex="-1" aria-labelledby={`a${id}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`a${id}`}>Xóa bình luận</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => closeIcon(id)}></button>
            </div>
            <div className="modal-body">
              Bạn có chắc chắn muốn xóa bình luận này không?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => closeIcon(id)}>Close</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteCmt(rootId, id, room)}>Xóa</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-background modal-background-${id}`} onClick={() => closeIcon(id)}></div>
    </>
  )
};

export default UIUpdateAndDeleteCmt;