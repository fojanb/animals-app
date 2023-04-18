import "./AnimalShow.css";
const AnimalShow = ({ src, alt }) => {
  const clickHandler = (e) => {
    e.target.style.fontSize = "2rem";
  }
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ width: "100px", height: "100px", margin: "20px" }}
      />
      <span id={alt} className="heart" onClick={e => clickHandler(e)}>
        &#128154;
      </span>
    </>
  );
};
export default AnimalShow;
