import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddPet({ addPets }) {
  const [data, setData] = useState({
    id: 0,
    image: "",
    name: "",
    species: "",
    breed: "",
    age: "",
  });
  const history = useHistory();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/pets", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addPets(data);
        history.push("/");
      });
  }
  return (
    <div>
      <h1>TO ADD YOUR PET</h1>
      <hr></hr>
      <p>Please submit information below</p>
      <form className="pet-form">
        <input
          className="input"
          type="text"
          placeholder="Image"
          value={data.image}
          required
          onChange={(e) => setData({ ...data, image: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={data.name}
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Species"
          value={data.species}
          required
          onChange={(e) => setData({ ...data, species: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Breed"
          value={data.breed}
          required
          onChange={(e) => setData({ ...data, breed: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Age"
          value={data.age}
          required
          onChange={(e) => setData({ ...data, age: e.target.value })}
        ></input>
        <br></br>
        <button onClick={handleSubmit} type="submit">
          Submit Now
        </button>
      </form>
    </div>
  );
}

export default AddPet;
