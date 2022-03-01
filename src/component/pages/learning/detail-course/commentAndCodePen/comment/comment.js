import CommentDetail from "./item-comment-detail";

function Comment(props) {

    return (
        <div className='comment'>
            <div className='comment-question'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ "width": "40px" }}
                    alt="Avatar"
                />
                <input
                    id="search-input"
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Bạn có gì thắc mắc trong bài học này?"
                    aria-label="Search"
                />
                <button type='button' className='btn-app'>Bình luận</button>
            </div>
            <div className='comment-detail'>
                <div className='title'>Bình luận</div>

                <div className="list-comment">
                    <div className="item-comment">
                        <CommentDetail
                            avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                            name='Bùi Thịnh'
                            time='3 ngày trước'
                            comment='Ra tiếp đi a ơi :v học mấy kĩ năng này ngon quá :v'
                            amount='25'
                        />
                        <div className="comment-feedback">
                            <CommentDetail
                                avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                                name='Bùi Thịnh'
                                time='3 ngày trước'
                                comment='Ra tiếp đi a ơi :v học mấy kĩ năng này ngon quá :v'
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;