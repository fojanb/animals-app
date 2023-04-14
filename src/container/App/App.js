import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  // console.log(useState(0));
  // console.log(useState);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={clickHandler}>Add Animal</button>
      <div>number of Animals :{counter}</div>
    </>
  );
};
export default App;
