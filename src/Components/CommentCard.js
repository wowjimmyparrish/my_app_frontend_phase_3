import { useState } from "react";

function CommentCard({ comment, editComment, deleteComment }) {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({
    comment: comment.comment,
    id: comment.id,
  });

  function handleEditClick(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    editComment(data);
  }
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleDelete(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/comments/${data.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        deleteComment(data);
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
          disabled={edit}
          onChange={(e) => setData({ comment: e.target.value, id: comment.id })}
        ></input>
        <button type="submit" onClick={handleEditClick}>
          {edit ? "Edit" : "Save"}
        </button>
        <button type="submit" onClick={handleSaveClick}>
          Save
        </button>
        <button type="submit" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
}
export default CommentCard;
