import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Pets from "./Components/Pets";
import AddPet from "./Components/AddPet";

function App() {
  const [allPets, setAllPets] = useState([]);
  const [page, setPage] = useState("./");

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
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
          <Pets allPets={allPets} />
        </Route>
        <Route path="/addpet">
          <AddPet addPet={addPet} />
        </Route>
        <Route path="*">
          <h1> 404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
