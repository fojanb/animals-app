const GetAnimal = () => {
  const pool = [
    {
      alt: "Bunny",
      src: "https://user-images.githubusercontent.com/23070621/232393013-00dd4eaa-e222-4091-965d-e81171f3d4b3.png",
    },
    {
      alt: "Cow",
      src: "https://user-images.githubusercontent.com/23070621/232393338-a61b2c1c-a82a-4739-aeb2-8914291341a2.png",
    },
    {
      alt: "Tiger",
      src: "https://user-images.githubusercontent.com/23070621/232275238-06ca75c7-b5f8-421a-b471-aad8af67e189.png",
    },
    {
      alt: "lion",
      src: "https://user-images.githubusercontent.com/23070621/232275281-e6d97550-a038-4327-81cb-1fc850bc4e50.png",
    },
    {
      alt: "Monkey",
      src: "https://user-images.githubusercontent.com/23070621/232392239-77d5ae2a-96d5-4632-b999-82acdb4936f1.png",
    },
    {
      alt: "Hippo",
      src: "https://user-images.githubusercontent.com/23070621/232392875-14e4987d-3c30-48b2-9e06-0e1c9945dbef.png",
    },
  ];
  return pool[Math.floor(Math.random() * pool.length)];
};
export default GetAnimal;
