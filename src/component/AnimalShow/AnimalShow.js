import { useState } from "react";
import "./AnimalShow.css";
const AnimalShow = ({ src, alt }) => {
  const [size, setSize] = useState(20);
  const clickHandler = () => {
    setSize(size * 2);
  };
  return (
    <span className="container">
      <img
        src={src}
        alt={alt}
        style={{
          width: "100px",
          height: "100px",
          margin: "20px",
          cursor: "pointer",
        }}
        onClick={clickHandler}
      />
      <span>Click on animal</span>

      <span id={alt} style={{ fontSize: `${size}px` }}>
        &#128155;
      </span>
    </span>
  );
};
export default AnimalShow;
