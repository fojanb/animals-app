import Button from "../../components/Button/Button";
const imageSources = [
  {
    src: "https://user-images.githubusercontent.com/23070621/231611632-c7e21b11-0392-4145-a180-321734ddfd0f.png",
    animalName: "Zebra",
  },
  {
    src: "https://user-images.githubusercontent.com/23070621/231936978-9f017df8-6490-4816-b6c4-81082df5f09f.png",
    animalName: "Rabit",
  },
  {
    src: "https://user-images.githubusercontent.com/23070621/231936485-7eabca0a-1a73-49fd-a88f-fbb98935b174.png",
    animalName: "Cow",
  },

];
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
export default App;
