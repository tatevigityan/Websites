var db = openDatabase("javascriptDB", "1.0", "javascriptDB", 65535);

let texx, countPredl, countTypes, countOperat, countOperln, countOperOut;

const createDatabase = () => {
  db.transaction((transaction) => {
    const sql =
      "CREATE TABLE items (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, item VARCHAR(2500) NOT NULL)";
    transaction.executeSql(sql, undefined, () => {
      alert("Таблица успешно создана");
    });
  });
};

const insert = () => {
  let item = document.getElementById("text").innerHTML;

  db.transaction((transaction) => {
    var sql = "INSERT INTO items(item) VALUES(?)";
    transaction.executeSql(sql, [item], () => {
      alert("Новая сущность успешно добавлена");
    });
  });
};

const isLetter = (i) => (i >= "a" && i <= "я") || (i >= "А" && i <= "Я");

const result = () => {
  db.transaction(function (transaction) {
    const sql = "SELECT * FROM items ORDER BY id DESC";
    transaction.executeSql(sql, undefined, (transaction, result) => {
      const row = result.rows.item(0);
      texx = row.item;
      calculate(row.item);
    });
  });
};

const calculate = (text) => {
  countPredl = 0;
  countTypes = 0;
  countOperat = 0;
  countOperln = 0;
  countOperOut = 0;

  let i = 0,
    slovo = "",
    predSlovo = "";

  while (i < texx.length) {
    if (texx[i] == ".") countPredl++;

    if (isLetter(texx[i])) slovo += texx[i];
    else {
      if (slovo == "Оператор" || slovo == "оператор") {
        if (
          texx[i - slovo.length - 1] != "|" &&
          texx[i] != "|" &&
          texx[i - slovo.length - 1] != "="
        )
          countOperat++;
      }
      if (
        (slovo == "ввода" || slovo == "Ввода") &&
        (predSlovo == "Оператор" || predSlovo == "оператор")
      )
        countOperln++;
      if (
        (slovo == "вывода" || slovo == "Вывода") &&
        (predSlovo == "Оператор" || predSlovo == "оператор")
      )
        countOperOut++;
      if (
        (slovo == "тип" || slovo == "Тип") &&
        (predSlovo == "Сложный" || predSlovo == "сложный")
      )
        countTypes++;
      if (
        (slovo == "тип" || slovo == "Тип") &&
        (predSlovo == "Простой" || predSlovo == "простой")
      ) {
        if (texx[i + 11] == ":") {
          while (text[i] != ".") {
            if (texx[i] == "|") {
              countTypes++;
            }
            ++i;
          }
          countTypes++;
          countPredl++;
        }
      }
      if (
        (slovo == "тип" || slovo == "Тип") &&
        (predSlovo == "Пользовательский" || predSlovo == "пользовательский")
      )
        countTypes++;
      predSlovo = slovo;
      slovo = "";
    }
    i++;
  }

  document.getElementById("pred").innerHTML =
    "Количество предложений: " + countPredl;
  document.getElementById("types").innerHTML =
    "Количество типов: " + countTypes;
  document.getElementById("oper").innerHTML =
    "Количество операторов: " + countOperat;
  document.getElementById("operln").innerHTML =
    "Количество операторов ввода: " + countOperln;
  document.getElementById("operOut").innerHTML =
    "Количество операторов вывода: " + countOperOut;
  document.getElementById("but").setAttribute("disabled", true);
};

createDatabase();
