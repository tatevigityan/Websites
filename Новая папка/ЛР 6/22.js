document.addEventListener("DOMContentLoaded", function (event) {
    init();
});
function init() {
    var ur = "https://restcountries.eu/rest/v2/name/greece";
    var reques = new XMLHttpRequest();
    reques.open("GET", ur);
    // Обработка ответа от сервера
    reques.onload = function () {
        // Преобразование полученного текста в JSON-объект
        var obj = JSON.parse(reques.responseText);
        // Пример ответа сервера {"ip":"93.81.27.81"}
        // Вывод свойства ip в консоль
        console.log(obj);
    };
    
    // Отправка запроса на сервер
    reques.send();
}