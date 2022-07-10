function vvelosport()
{
  let pervaya=6;
  let shestaya=6;
  if(pervaya<shestaya)
  {
    console.log(shestaya+" больше, чем "+pervaya);
  }
  else{
    if(pervaya==shestaya)
  {
    console.log(pervaya+" равно "+shestaya);
  }
  else{
    console.log(pervaya+" больше, чем "+shestaya);
  }
  }
  if(pervaya*pervaya<shestaya*shestaya)
  {
    console.log(shestaya+" в квадрате больше, чем квадрат "+pervaya);
  }
  else{
    if(pervaya==shestaya)
  {
    console.log(pervaya+" в квадрате равен "+shestaya+ " в квадрате");
  }
  else{
    console.log(pervaya+" в квадрате больше, чем квадрат "+shestaya);
  }
  }
if(pervaya<shestaya)
  {
    console.log(shestaya+" факториал больше, чем "+pervaya+ " факториал");
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(pervaya+" факториал равен "+shestaya+ " факториал");
    }
    else{
      console.log(pervaya+" больше, чем "+shestaya);
    }
  }
  if(pervaya<shestaya)
  {
    console.log(shestaya+" +2 больше, чем "+pervaya+ "+2");
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(shestaya+" +2 равно "+pervaya+ "+2");
    }
    else{
      console.log(pervaya+" +2 больше, чем "+shestaya+ "+2");
    }
  }
  if(Math.abs(pervaya)<Math.abs(shestaya))
  {
    console.log("модуль "+shestaya+" больше, чем модуль "+pervaya);
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(shestaya+" равен "+pervaya+ " по модулю");
    }
    else{
      console.log("модуль"+pervaya+" больше, чем модуль"+shestaya);
    }
  }
  if(Math.cos(pervaya)<Math.cos(shestaya))
  {
    console.log("косинус "+shestaya+" больше, чем косинус "+pervaya);
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(shestaya+" равен "+pervaya+ " по функции косинуса");
    }
    else{
      console.log("косинус"+pervaya+" больше, чем косинус"+shestaya);
    }
  }
  if(Math.sin(pervaya)<Math.sin(shestaya))
  {
    console.log("синус "+shestaya+" больше, чем синус "+pervaya);
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(shestaya+" равен "+pervaya+ " по функции синуса");
    }
    else{
      console.log("синус "+pervaya+" больше, чем синус "+shestaya);
    }
  }
  if(Math.tan(pervaya)<Math.tan(shestaya))
  {
    console.log("тангенс "+shestaya+" больше, чем тангенс "+pervaya);
  }
  else{
    if(pervaya==shestaya)
    {
      console.log(shestaya+" равен "+pervaya+ " по функции тангенса ");
    }
    else{
      console.log("тангенс "+pervaya+" больше, чем тангенс "+shestaya);
    }
  }
  pervaya<shestaya?console.log(shestaya+" больше, чем "+pervaya+" с помощью тернарного оператора"):console.log(pervaya+" больше, чем "+shestaya+" с помощью тернарного оператора")
  console.log(pervaya+shestaya);
  console.log(pervaya+shestaya+1);
  let arr = ["Я", "катаюсь", "на", "велосипеде", "каждый","день"];
  console.log("Проверочное слово: день");
  for(let i=0;i<6;++i)
  {
    console.log(arr[i]);
    if(arr[i].indexOf('день')!=-1 )
    {
      console.log(arr[i]+"!");
    }
  }
  delete arr[2];
  delete arr[5];
  for(let i=0;i<6;++i)
  {
    console.log(arr[i]);
  }
  let str = "123";
  let num = Number(str); 
  console.log(num);
  console.log(velosport_object);
  velosport_object.predlogenie="Велоспорт";
  console.log(velosport_object.predlogenie);
  let k=-10
  for(let i=0;i<6;++i)
  {
    if(k<velosport_object.arr_number[i])
    {
     k=velosport_object.arr_number[i];
    }
  }
  console.log(k);
  console.log(velosport_object.data);
}
let peremennaya=false;
function velosport()
{
  alert("Велоспорт");
}
function podtvergdennie()
{
    peremennaya = confirm('Подтвердить изменение переменной на true?');
    if(peremennaya)
    {
      console.log("peremennaya равна: "+peremennaya);
    
    }
}
let velosport_object={
   predlogenie: "Велоспорт улучшает здоровье",
   nomer: Number(6),
    arr  : ["Я", "катаюсь", "на", "велосипеде", "каждый","день"],
    arr_number : ["1", "2", "3", "4", "5","6"],
    baz: {myProp: 12},
    data: new Date()
}
function registr()
{
   console.log('велоспорт улучшает здоровье'.toUpperCase());
}