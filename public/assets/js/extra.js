$(document).ready(function () {
  // Added document.ready required jquery wrapper function above!

  let imageButtonEl = document.getElementById("addBurgerBtn");
  let imageContainerEl = document.getElementById("burgerImage");

  imageButtonEl.addEventListener("click", displayImage);

  function getRandomImage() {
    let imagesArray = ["https://user-images.githubusercontent.com/61030935/82116901-f7d43b80-973a-11ea-8ebd-643eddf3d8bd.png",

      "https://user-images.githubusercontent.com/61030935/82116925-27834380-973b-11ea-84f9-40d86e5d6a8a.png",

      "https://user-images.githubusercontent.com/61030935/82116945-471a6c00-973b-11ea-9cd3-564a5c6e8475.png",

      "https://user-images.githubusercontent.com/61030935/82116960-58fc0f00-973b-11ea-8953-702c9f26767c.png",

      "https://user-images.githubusercontent.com/61030935/82116968-674a2b00-973b-11ea-86cc-71beb7408ed0.png",

      "https://user-images.githubusercontent.com/61030935/82116984-77faa100-973b-11ea-992c-53bd03c7e1a1.png",

      "https://user-images.githubusercontent.com/61030935/82117002-86e15380-973b-11ea-9283-90de1a6b83f0.png"];
    let randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    return randomImage;
  };

  function displayImage() {
    imageContainerEl.src = getRandomImage();

  };
  displayImage();

});
