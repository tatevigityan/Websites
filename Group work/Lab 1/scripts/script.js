/* Функция нахождения определителя матрицы */
findDeterminant = () => {
  a11 = document.getElementById("11").value; // нахождение элементов матрицы
  a12 = document.getElementById("12").value;
  a13 = document.getElementById("13").value;
  a21 = document.getElementById("21").value;
  a22 = document.getElementById("22").value;
  a23 = document.getElementById("23").value;
  a31 = document.getElementById("31").value;
  a32 = document.getElementById("32").value;
  a33 = document.getElementById("33").value;

  result = document.querySelector(".result");

  if (a11 && a12 && a13 && a21 && a22 && a23 && a31 && a32 && a33) {
    // нахождение определителя по формуле
    determinant =
      a11 * a22 * a33 +
      a31 * a12 * a23 +
      a13 * a32 * a21 -
      (a31 * a22 * a13 + a21 * a12 * a33 + a11 * a23 * a32);

    // вывод определителя на экран
    result.textContent = "Определитель матрицы = " + determinant;
    result.style.color = "green";
  } else {
    // вывод сообщения об ошибке,если заполнены не все элементы таблицы
    result.textContent = "Матрица заполнена некорректно!";
    result.style.color = "red";
  }
};
