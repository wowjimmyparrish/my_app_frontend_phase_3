import { useState } from "react";

function AddComment({ pet, addComment }) {
  const [data, setData] = useState({
    comment: "",
    pet_id: pet.id,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/comments", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addComment(data);
      });
  }

  return (
    <div>
      <form className="comment-form">
        <input
          className="input"
          type="text"
          placeholder="Comment"
          value={data.comment}
          onChange={(e) => setData({ comment: e.target.value, pet_id: pet.id })}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
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

export default AddComment;
