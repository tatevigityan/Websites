let imageX = 1100;
let imageY = 0;

Move = () => {
  const image = document.querySelector("img");
  imageY += Math.sin(imageX * 15) * 50;

  if (imageX == 0) {
    imageX += 1000;
    imageY = 0;
  } else {
    imageX -= 10;
  }

  image.style.marginLeft = imageX + "px";
  image.style.marginTop = imageY + "px";
};

setInterval(Move, 40);
