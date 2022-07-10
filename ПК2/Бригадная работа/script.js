const calculate = () => {
  document.getElementById("0").innerText =
    document.documentElement.clientHeight + "px";
  document.getElementById("1").innerText =
    document.documentElement.clientWidth + "px";
  document.getElementById("2").innerText =
    document.documentElement.children[1].style.fontSize;
  document.getElementById("3").innerText =
    document.documentElement.children[1].style.fontFamily;
  document.getElementById("4").innerText =
    document.documentElement.children[1].style.backgroundColor;
};

calculate();
