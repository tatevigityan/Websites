document.addEventListener("DOMContentLoaded", function(event) {
    //init();
    var uri = "https://api.ipify.org/?format=json";
    var request = new XMLHttpRequest();
    request.open("GET", uri);
    // Обработка ответа от сервера
    request.onload = function() {
        // Преобразование полученного текста в JSON-объект
        var obj = JSON.parse(request.responseText);
        // Пример ответа сервера {"ip":"93.81.27.81"}
        // Вывод свойства ip в консоль
        console.log(obj.ip);
        
        document.getElementById('adress').innerHTML += obj.ip;
    };

    // Отправка запроса на сервер
    request.send();
    getCountry();
    getNumber();
   // coordin();
});



function getNumber() {
    var uri = "http://numbersapi.com/random/date?json";
    var request = new XMLHttpRequest();
    request.open("GET", uri);
    request.onload = function() {
        var obj = JSON.parse(request.responseText);
        console.log(obj);
        document.getElementById('number').innerHTML += obj.text;
    }
    request.send();
}

let getCountry = async () => {
    
    let countryUrl = "https://restcountries.com/v3.1/name/france";
    let response = await fetch(countryUrl);
    console.log(response);
    let country = await response.json();
    console.log(country);
    document.getElementById('country').innerHTML += "Название страны: " + country[0].name.official + "<br>Столица: " + country[0].capital[0] + "<br>Регион: " + country[0].region + "<br> свойство nativeName: "+ country[0].nativeName +"<br> свойство nativeName языка: "+ country[0].languages.nativeName + "<br>Родное название: " + country[0].altSpellings[country[0].altSpellings.length - 1];
}

function coordin() {

var adress = /* 'Иваново, Рабфаковская, д.34'  */document.getElementById('adres').value;
console.log(adress);
var uri = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&format=json&geocode="+adress;
    var request = new XMLHttpRequest();
    request.open("GET", uri);
    request.onload = function() {
        var obj = JSON.parse(request.responseText);
        var coordinates = obj.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
        console.log(coordinates);
        document.getElementById('adressout').innerHTML+=coordinates;
    }
    request.send();
}