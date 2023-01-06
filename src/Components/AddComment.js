import { useState } from "react";

function Comments() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <div>
      <form className="comment-form">
        <input className="input" type="text" placeholder="Comment"></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Comments;
