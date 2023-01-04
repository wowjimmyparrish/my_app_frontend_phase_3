function Comments({ pet }) {
  return (
    <div>
      <p>
        Comments:
        {pet.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <li>{comment.comment}</li>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Comments;
