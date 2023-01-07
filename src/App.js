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

  function editComment(comment) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    };

    fetch(`http://localhost:9292/comments/${comment.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addComment(data);
      });

    console.log(comment);
  }

  function addComment(newComment) {
    setAllPets((prevAllPets) => {
      return prevAllPets.map((pet) => {
        if (pet.id === newComment.pet_id) {
          return { ...pet, comments: [...pet.comments, newComment] };
        }
        return pet;
      });
    });
  }

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
          <Pets
            allPets={allPets}
            addComment={addComment}
            editComment={editComment}
          />
        </Route>
        <Route path="/addpet">
          <AddPet />
        </Route>
        <Route path="*">
          <h1> 404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
