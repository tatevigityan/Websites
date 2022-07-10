var a = 17;
var b = 6;

console.log("a==b", a == b);
console.log("a===b", a === b);
console.log("a!=b", a != b);
console.log("a>=b", a >= b);
console.log("a<b", a < b);
console.log("a<=b", a <= b);
console.log("a!==b", a !== b);
console.log("a>b", a > b);

var bob = a < b ? "a<b" : "b<a";
console.log(bob);

var sl = a + b;
console.log("a+b=", sl);
console.log("a+b+1=", ++sl);

var mss = ["Один", "Два", "Три", "Четыре", "Пять", "Шесть"];
var i = 0;
for (i; i < mss.length; i++) {
  if (mss[i] == "Один") console.log("!", mss[i]);
  else console.log(mss[i]);
}

mss.splice(4, 1);
mss.splice(1, 1);
for (i = 0; i < mss.length; i++) {
  console.log(mss[i]);
}

function legkaya_atletika() {
  alert("Сноуборд");
}

var glob = false;
glob = confirm("Подтверждение...");
if (glob) console.log(glob);

var str = "7000";
console.log(typeof str);
str = Number.parseInt(str);
console.log(typeof str);

var atletika = {};
atletika.tema = "Сноуборд\n";
atletika.varik = 17;
atletika.mssstr = ["Один", "Два", "Три", "Четыре"];
atletika.proizv = [7, 40, 33, 14];
atletika.object = {};

console.log(atletika);
atletika.mssstr[0] = "Сноуборд";
console.log(atletika.mssstr[0]);

var maks = atletika.proizv[0];
for (i = 0; i < atletika.proizv.length; i++) {
  if (atletika.proizv[i] > maks) {
    maks = atletika.proizv[i];
  }
}
console.log(maks);

var strochka = "strochka";
console.log(strochka.toUpperCase());

atletika.date = new Date();
console.log(atletika.date);

var nii = [1, 3, 80, 7, 99, 11, 120, 77];
var mks;
nil.sort();
nil.reverse();
mks = nil[0];
console.log(mks);
