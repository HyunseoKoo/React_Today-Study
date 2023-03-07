import { useDispatch } from 'react-redux';

const CommentForm = ({ onAddCommentForm }) => {
  return (
    <form onSubmit={onAddCommentForm}>
      <label>
        <input type="text" name="name" placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;
