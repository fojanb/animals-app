import Button from "../../components/Button/Button";
const clickHandler = () => {
  const animal = document.createElement("img");
  animal.classList.add("img_size");
  animal.src =
    "https://user-images.githubusercontent.com/23070621/231611632-c7e21b11-0392-4145-a180-321734ddfd0f.png";
  document.body.append(animal);
};
const App = () => {
  return (
    <div>
      <Button clickHandler={clickHandler} />
    </div>
  );
};
export { App };
