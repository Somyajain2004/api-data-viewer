import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  // Fetch 5 random images
  const fetchRandomDogs = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
    const data = await res.json();
    setImages(data.message);
    setSelectedBreed(""); // reset breed
  };

  // Fetch 5 images of a selected breed
  const fetchBreedImages = async (breed) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
    const data = await res.json();
    setImages(data.message);
  };

  // Get list of all breeds
  const fetchBreeds = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    setBreeds(Object.keys(data.message));
  };

  useEffect(() => {
    fetchRandomDogs();
    fetchBreeds();
  }, []);

  // Handle dropdown change
  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
    if (breed) {
      fetchBreedImages(breed);
    }
  };

  return (
    <div className="App">
      <h1>Dog Gallery</h1>

      <div className="controls">
        <button onClick={fetchRandomDogs}>Refresh</button>

        <select value={selectedBreed} onChange={handleBreedChange}>
          <option value="">Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="dog-container">
        {images.map((img, index) => (
          <img key={index} src={img} alt="dog" className="dog-img" />
        ))}
      </div>
    </div>
  );
}

export default App;
