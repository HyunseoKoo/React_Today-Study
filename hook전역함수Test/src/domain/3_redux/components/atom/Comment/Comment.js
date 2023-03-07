import { useDispatch } from 'react-redux';

const Comment = ({ post, key, comment }) => {
  const dispatch = useDispatch();
  const { id } = post;
  // console.log(id);

  // Comment 삭제
  const onDeleteMyComment = () => {
    // console.log(comment);
    dispatch({
      type: 'DELETE_COMMENT',
      payload: {
        id: id,
        commentId: comment.id,
      },
    });
  };
  // ()=>onDeleteMyComment(comment.id)
  return (
    <div
      style={{
        border: '1px solid #000',
      }}
    >
      <h6>{comment.User.nickName}</h6>
      <p>{comment.content}</p>
      {comment.myComment && (
        <button type="button" onClick={onDeleteMyComment}>
          삭제
        </button>
      )}
    </div>
  );
};
export default Comment;
