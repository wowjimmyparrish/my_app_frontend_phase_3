import PetCard from "./PetCard";

function Pets({ allPets }) {
  const petArray = allPets.map((pet) => <PetCard key={pet.id} pet={pet} />);

  return (
    <div id="pets">
      <ul>{petArray}</ul>
    </div>
  );
}

export default Pets;
