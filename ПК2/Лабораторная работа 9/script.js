// Параметры модели:
let a,
  b,
  x = [],
  y = [];

const calculate = () => {
  x = JSON.parse(localStorage.x);
  y = JSON.parse(localStorage.y);

  // Размер массива:
  const n = x.length;

  // Средние значения:
  let Sx = 0,
    Sy = 0,
    Sxy = 0,
    Sxx = 0;

  // Вычисление параметров модели:
  for (let i = 0; i < n; i++) {
    Sx += x[i];
    Sy += y[i];
    Sxy += x[i] * y[i];
    Sxx += x[i] * x[i];
  }

  Sx /= n;
  Sy /= n;

  Sxy /= n;
  Sxx /= n;

  a = (Sx * Sy - Sxy) / (Sx * Sx - Sxx);
  b = (Sxy - a * Sxx) / Sx;
};

const showResults = () => {
  calculate();

  let firstValue = document.getElementById("a");
  let secondValue = document.getElementById("b");

  firstValue.textContent = a.toFixed(3);
  secondValue.textContent = b.toFixed(3);

  localStorage.setItem("a", a.toFixed(3));
  localStorage.setItem("b", b.toFixed(3));
};

const saveRegressionValues = () => {
  for (let i = 0; i < 10; i++) {
    x.push(parseInt(document.getElementById(`x${i}`).value));
    y.push(parseInt(document.getElementById(`y${i}`).value));
  }

  localStorage.x = JSON.stringify(x);
  localStorage.y = JSON.stringify(y);
};

const showEquation = () => {
  const firstValue = localStorage.getItem("a"),
    secondValue = localStorage.getItem("b");

  let result = document.getElementById("result");

  if (result && firstValue && firstValue !== "NaN") {
    result.textContent = `y = ${firstValue} + ${secondValue}x`;
    result.style.visibility = "visible";

    x = JSON.parse(localStorage.x);
    y = JSON.parse(localStorage.y);

    for (let i = 0; i < 10; i++) {
      document.getElementById(`x${i}`).value = x[i];
      document.getElementById(`y${i}`).value = y[i];
    }
  }
};

showEquation();
