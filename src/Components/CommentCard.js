import { useState } from "react";

function CommentCard({ comment, editComment }) {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({
    comment: comment.comment,
  });

  function handleEditClick(e) {
    e.preventDefault();
    editComment(comment);
    setEdit(!edit);
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
          onChange={(e) => setData({ comment: e.target.value })}
        ></input>
        <button type="submit" onClick={handleEditClick}>
          {edit ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
}
export default CommentCard;
