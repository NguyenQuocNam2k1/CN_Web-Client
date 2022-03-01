
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faUser);

function CommentDetail(props) {

    const CountLike = () => {

    }

    return (
        <>
            <div className="item-comment-detail">
                <img
                    src={props.avatar}
                    className="rounded-circle"
                    style={{ "width": "40px" }}
                    alt="Avatar"
                />
                <div className="description-comment">
                    <div className="name">{props.name}</div>
                    <div className="description">{props.comment}</div>
                    <div className="amount-like">
                        <div className="icon-like">
                            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                        </div>
                        <p className="amount">{props.amount}</p>
                    </div>
                </div>
            </div>
            <div className="felt-feedback-time">
                <p className="felt">Thích</p>
                <p className="feedback">Trả lời</p>
                <p className="time">{props.time}</p>
            </div>
        </>
    )
}

export default CommentDetail;