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

  function editComment(data) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: data.comment }),
    };
    fetch(`http://localhost:9292/comments/${data.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateComment(data);
      });
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

  function updateComment(updatedComment) {
    setAllPets((prevAllPets) => {
      return prevAllPets.map((pet) => {
        if (pet.id === updatedComment.pet_id) {
          const filteredComments = pet.comments.filter(
            (prevComment) => prevComment.id !== updatedComment.id
          );

          return { ...pet, comments: [...filteredComments, updatedComment] };
        }
        return pet;
      });
    });
  }

  function deleteComment(comment) {
    setAllPets((prevAllPets) => {
      return prevAllPets.map((pet) => {
        if (pet.id === comment.pet_id) {
          const filteredComments = pet.comments.filter(
            (prevComment) => prevComment.id !== comment.id
          );
          return { ...pet, comments: filteredComments };
        }
        return pet;
      });
    });
  }

  function addPets(newPet) {
    setAllPets([...allPets, newPet]);
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
            deleteComment={deleteComment}
          />
        </Route>
        <Route path="/addpet">
          <AddPet addPets={addPets} />
        </Route>
        <Route path="*">
          <h1> 404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
