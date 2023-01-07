function CommentCard({ comment }) {
  console.log("comment inside comment card", comment);
  return (
    <div key={comment.id}>
      <li>{comment.comment}</li>
    </div>
  );
}
export default CommentCard;
