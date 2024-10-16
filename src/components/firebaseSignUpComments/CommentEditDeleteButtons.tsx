import { IsEditingCommentProps } from "./IsEditingComment";

const CommentEditDeleteButtons: React.FC<IsEditingCommentProps> = (
  props: IsEditingCommentProps
) => {
  const {
    commentId,
    userId,
    handleEditComment,
    handleDeleteComment,
    commentText,
  } = props;
  return commentId === userId ? (
    <div>
      <button onClick={() => handleEditComment(commentId, commentText)}>
        수정
      </button>
      <button onClick={() => handleDeleteComment(commentId)}>삭제</button>
    </div>
  ) : null;
};

export default CommentEditDeleteButtons;
