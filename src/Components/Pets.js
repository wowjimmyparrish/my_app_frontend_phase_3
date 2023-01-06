import PetCard from "./PetCard";

function Pets({ allPets, addComment }) {
  const petArray = allPets.map((pet) => (
    <PetCard key={pet.id} pet={pet} addComment={addComment} />
  ));

  return (
    <div id="pets">
      <ul>{petArray}</ul>
    </div>
  );
}

export default Pets;
