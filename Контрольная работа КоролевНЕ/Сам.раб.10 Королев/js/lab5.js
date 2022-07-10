document.addEventListener( "DOMContentLoaded" ,  function(event) {
    var hh1 = document.getElementById("hh1");
    hh1.innerHTML += " 6";
    $(document).ready(function(){
    $('#hh1').hover(
    function() {
      $( this ).addClass('hh1');
    }, function() {
        $( this ).removeClass('hh1');
      }
      );
  });

  var date = new Date();
  document.getElementById('time').innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  var input = document.querySelectorAll('input');
  var ci = input.length;
  document.getElementById('cntOfInpt').innerHTML = "Количество элементов input: " + ci;

  $(document).ready(function(){
    $('label').addClass('lbl');
  });
 
  document.getElementById('crs').remove();

  var selectElement = document.getElementById('formedu');
  selectElement.add(new Option("очно-заочная"));

  //$("#form").prepend('<p style="font-size: 20px; color: green;">Кататься на велосипеде полезно!</p>');
document.getElementById('pred').innerHTML = "Кататься на велосипеде полезно!";

  function chbox(){
    var chbox = document.getElementById('textarea');
  
    if (chbox.checked === true)
    {
      $("#checkbox1").append('<input type="text">');
    }
    else
    {
      $("#checkbox1").html("");
    } 
  }

});

    function chbox(){
    var chbox = document.getElementById('textarea');
  
    if (chbox.checked === true)
    {
      $("#checkbox1").append('<input type="text">');
    }
    else
    {
      $("#checkbox1").html("");
    } 
  }
    
  function createObject()
{
  document.getElementById('form').onsubmit = function(){return false};

  let obj = {};
  obj.firstName = document.getElementById('firstName').value;
  obj.lastName = document.getElementById('lastName').value;

  var rar = document.getElementsByName('sex');
  for (var i = 0; i < rar.length; i++)
  {
    if (rar[i].checked)
    {
      obj.gender = rar[i].value;
    } 
  }

  obj.dateOfBirth = document.getElementById('date').value;

  obj.course = document.getElementById('course').value;

  obj.eduform = document.getElementById('formedu').value;

  obj.company = document.getElementById('bike').value;

  var rar1 = document.getElementsByName('questions');
  for (var i = 0; i < rar1.length; i++)
  {
    if (rar1[i].checked)
    {
      obj.version = rar1[i].value;
    }
  }

  let types = new Array();
  obj.types = types;

  jbj.comments = document.getElementById('comments').value;

  console.log(obj);
}

function deleteEl(id)
{
  document.getElementById(id).innerHTML = '';
}
