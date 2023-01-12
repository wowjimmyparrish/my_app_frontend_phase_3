import PetCard from "./PetCard";

function Pets({ allPets, addComment, editComment, deleteComment }) {
  const petArray = allPets.map((pet) => (
    <PetCard
      key={pet.id}
      pet={pet}
      addComment={addComment}
      editComment={editComment}
      deleteComment={deleteComment}
    />
  ));

  return (
    <div id="pets">
      <ul>{petArray}</ul>
    </div>
  );
}

export default Pets;
