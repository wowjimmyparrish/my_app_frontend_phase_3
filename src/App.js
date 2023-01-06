import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Pets from "./Components/Pets";

function App() {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then((r) => r.json())
      .then((data) => setAllPets(data));
  }, []);
  console.log(allPets);

  function addPet(newPet) {
    setAllPets([newPet, ...allPets]);
  }

  return (
    <div>
      <Home />
      <Pets allPets={allPets} />
    </div>
  );
}

export default App;
