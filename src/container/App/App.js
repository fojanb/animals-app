import { useState } from "react";
import AnimalShow from "../../component/AnimalShow/AnimalShow";
import GetAnimal from "../../component/GetAnimal/GetAnimal";
import "./App.css"
const App = () => {
  const [animals, setAnimals] = useState([]);
  // Call a function Vs. Refrence to a function
  // console.log(useState(0));
  // console.log(useState);
  const clickHandler = () => {
    // In React.js -> Never update the state directly.
    setAnimals([...animals, GetAnimal()]);
  };
  let renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} src={animal.src} alt={animal.alt} />;
  });
  return (
    <>
      <button onClick={clickHandler} id="addAnimal">Add Animal</button>
      <div>{renderedAnimals}</div>
    </>
  );
};
export default App;
