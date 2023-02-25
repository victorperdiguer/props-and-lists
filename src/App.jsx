import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';


function App() {
  const [animals, setAnimals] = useState(animalData);

  const handleSortByLife = () => {
    const sortedAnimals = [...animalData].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy);
    setAnimals(sortedAnimals);
  }

  const handleDogsOnly = () => {
    const dogsOnly = animalData.filter(animal => animal.type === 'dog');
    setAnimals(dogsOnly);
  }

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button onClick={handleSortByLife}>Sort by life expectancy</button>
      <button onClick={handleDogsOnly}>Show dogs only</button>
      {animals.map(animal => {
        return <Card key={animal._id} animal={animal} />
      })}
    </div>
  );
}

export default App;
