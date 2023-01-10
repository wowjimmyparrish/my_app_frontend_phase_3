import { useState } from "react";

function CommentCard({ comment, editComment, id }) {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({
    comment: comment.comment,
    id: comment.id,
  });
  console.log("KEY", id);
  function handleEditClick(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    editComment(data);
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
          REAL SAVE
        </button>
      </form>
    </div>
  );
}
export default CommentCard;
