function Comments({ pet }) {
  return (
    <div>
      <form className="comment-form">
        <input className="input" type="text" placeholder="Comment"></input>
        <button type="submit">Submit</button>
      </form>
      <h3>Comments:</h3>
      {pet.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <li>{comment.comment}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
