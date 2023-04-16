import { useState } from "react";

const App = () => {
  const [animals, setAnimals] = useState([]);
  // Call a function Vs. Refrence to a function
  // console.log(useState(0));
  // console.log(useState);
  const getAnimal = () => {
    const pool = [
      {
        name: "Bird",
        src: "https://user-images.githubusercontent.com/23070621/232275195-cb34b4e4-d185-46d3-8b5b-06515325bf26.png",
      },
      {
        name: "Cow",
        src: "https://user-images.githubusercontent.com/23070621/232273800-1628a70c-2cf7-457e-91a4-66fb798beb02.png",
      },
      {
        name: "Tiger",
        src: "https://user-images.githubusercontent.com/23070621/232275238-06ca75c7-b5f8-421a-b471-aad8af67e189.png",
      },
      {
        name: "lion",
        src: "https://user-images.githubusercontent.com/23070621/232275281-e6d97550-a038-4327-81cb-1fc850bc4e50.png",
      },
    ];
    return pool[Math.floor(Math.random() * pool.length)];
  };
  const clickHandler = () => {
    let animalized = [...animals, getAnimal()].map((animal, index) => (
      <div key={index}>
        <img
          src={animal.src}
          alt={animal.name}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    ));
    console.log(animalized);
    setAnimals(animalized);
  };
  return (
    <>
      <button onClick={clickHandler}>Add Animal</button>
      <div>{animals}</div>
    </>
  );
};
export default App;
