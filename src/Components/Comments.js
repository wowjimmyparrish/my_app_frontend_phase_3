import CommentCard from "./CommentCard";

function Comments({ pet, editComment }) {
  return (
    <div>
      <h3>Comments:</h3>
      {pet.comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            comment={comment}
            editComment={editComment}
          />
        );
      })}
    </div>
  );
}

export default Comments;
