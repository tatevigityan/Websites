ChangeTriangleValue = () => {
  const sideSize = document.querySelector("input").value;
  const triangle = document.querySelector(".side");
  if (sideSize) {
    triangle.style.borderLeftWidth = sideSize + "px";
    triangle.style.borderRightWidth = sideSize + "px";
    triangle.style.borderBottomWidth = sideSize * 2 + "px";
  }
};
