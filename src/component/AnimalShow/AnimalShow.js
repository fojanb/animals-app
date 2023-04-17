const AnimalShow = ({ src, alt }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ width: "100px", height: "100px",margin:"20px" }}
      />
    </>
  );
};
export default AnimalShow;
