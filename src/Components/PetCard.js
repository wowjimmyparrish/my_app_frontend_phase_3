import AddComment from "./AddComment";

function PetCard({ pet }) {
  return (
    <div className="petCard">
      <li>
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name}></img>
        <p>Breed: {pet.breed}</p>
        <p>Species: {pet.species}</p>
        <p>Age: {pet.age}</p>
      </li>
      <AddComment />
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

export default PetCard;
