import AddComment from "./AddComment";
import Comments from "./Comments";

function PetCard({ pet, addComment, editComment, deleteComment }) {
  return (
    <div className="petCard">
      <li>
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name}></img>
        <p>Breed: {pet.breed}</p>
        <p>Species: {pet.species}</p>
        <p>Age: {pet.age}</p>
      </li>
      <Comments
        pet={pet}
        editComment={editComment}
        deleteComment={deleteComment}
      />
      <AddComment pet={pet} addComment={addComment} />
    </div>
  );
}

export default PetCard;
