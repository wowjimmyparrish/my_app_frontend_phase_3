import CommentCard from "./CommentCard";

function Comments({ pet, editComment }) {
  return (
    <div>
      <h3>Comments:</h3>
      {pet.comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
// const [edit, setEdit] = useState(true);

//   function handleClick() {
//     setEdit(!edit);
//     console.log("inside", edit);
//   }
export default Comments;
