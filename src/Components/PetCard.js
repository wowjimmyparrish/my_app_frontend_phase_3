import Comments from "./Comments";

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
      <Comments pet={pet} />
    </div>
  );
}

export default PetCard;
