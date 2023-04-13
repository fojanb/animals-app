import "./Button.css";
const Button = ({clickHandler}) => {
  return (
    <>
      <button className="btn" onClick={clickHandler}>Add Animal</button>
    </>
  );
};

export default Button;
