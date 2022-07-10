document.addEventListener("DOMContentLoaded", function (event) {
    init();
});
function init() {
    var uri = "https://api.ipify.org/?format=json";
    var request = new XMLHttpRequest();
    request.open("GET", uri);
    request.onload = function () {

        var obj = JSON.parse(request.responseText);

        document.getElementById('111').innerHTML = obj.ip;
        console.log(obj.ip);
    };
    request.send();

    var ur = "https://restcountries.eu/rest/v2/name/greece";
    var reques = new XMLHttpRequest();
    reques.open("GET", ur);
    reques.onload = function () {
        var ob = JSON.parse(reques.responseText);
        document.getElementById('222').innerHTML = ob[0].flag;
        document.getElementById('11').innerHTML = ob[0].name;
        document.getElementById('12').innerHTML = ob[0].capital;
        document.getElementById('13').innerHTML = ob[0].region;
        document.getElementById('14').innerHTML = ob[0].nativeName;
        document.getElementById('16').innerHTML = ob[0].translations.es;
        console.log(ob[0].name);
        console.log(ob[0].capital);
        console.log(ob[0].region);
        console.log(ob[0].nativeName);
        console.log(ob[0].languages.nativeName);
        console.log(ob[0].translations.es);

        var pc = document.getElementById("222");
        pc.innerHTML = "<img src='https://restcountries.eu/data/grc.svg'>";
    };
    reques.send();

    var u = "http://numbersapi.com/random/date?json";
    var reque = new XMLHttpRequest();
    reque.open("GET", u);
    reque.onload = function () {
        var obb = JSON.parse(reque.responseText);

        document.getElementById('44').innerHTML = obb.text;
        console.log(obb.text);
    };
    reque.send();

    var ррe = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&format=json&geocode=%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE0%D1%88%D1%83%D0%B1%D0%B8%D0%BD%D1%8B%D1%853027";
    var requez = new XMLHttpRequest();
    requez.open("GET", ppe);
    requez.onload = function () {

        var objj = JSON.parse(requez.responseText);

        console.log(objj);
    };
    requez.send();
}


