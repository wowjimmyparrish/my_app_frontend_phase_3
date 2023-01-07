import PetCard from "./PetCard";

function Pets({ allPets, addComment, editComment }) {
  const petArray = allPets.map((pet) => (
    <PetCard
      key={pet.id}
      pet={pet}
      addComment={addComment}
      editComment={editComment}
    />
  ));

  return (
    <div id="pets">
      <ul>{petArray}</ul>
    </div>
  );
}

export default Pets;
