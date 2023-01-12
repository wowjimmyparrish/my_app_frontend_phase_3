import CommentCard from "./CommentCard";

function Comments({ pet, editComment, deleteComment }) {
  return (
    <div>
      <h3>Comments:</h3>
      {pet.comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            id={comment.id}
            comment={comment}
            editComment={editComment}
            deleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
}

export default Comments;
