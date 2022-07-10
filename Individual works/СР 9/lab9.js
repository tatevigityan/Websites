document.addEventListener("DOMContentLoaded", function (event) {
  init();
});
function init() {
  $(document).ready(function () {
    //2
    $("#done").click(function () {
      var state = $("input[name='polojenie']:checked").val();
      if (state == "vverx") {
        $("#spisok").prepend($("<li>").text($("#text").val()));
      }
      if (state == "vniz") {
        $("#spisok").append($("<li>").text($("#text").val()));
      }
      10;
    });
    //3
    var block = $("#3").clone();
    $("#clon").click(function () {
      $("#pp").append(block);
    });
    //4
    $("#rzm").click(function () {
      $("#foto").css("width", "360px");
    });
    $("#del").click(function () {
      $("#foto").remove();
    });
    //5
    function hidetext() {
      $("#text").hide(1000, function () {
        $("#hide").hide();
        $("#show").show();
      });
    }
    function showtext() {
      $("#text").show(1000, function () {
        $("#hide").show();
        $("#show").hide();
      });
    }
    function animation() {
      $("#text").hide(1000, function () {
        $("#hide").fadeOut();
        $("#show").show();
      });
    }
    $("#hide").bind("click", hidetext);
    $("#show").bind("click", showtext);
    $("#hide").bind("click", animation);
  });
  //6
  $(".table-filters input").on("input", function () {
    filterTable($(this).parents("table"));
  });
  11;
  function filterTable($table) {
    var $filters = $table.find(".table-filters td");
    var $rows = $table.find(".table-data");
    $rows.each(function (rowIndex) {
      var valid = true;
      $(this)
        .find("td")
        .each(function (colIndex) {
          if ($filters.eq(colIndex).find("input").val()) {
            if (
              $(this)
                .html()
                .toLowerCase()
                .indexOf(
                  $filters.eq(colIndex).find("input").val().toLowerCase()
                ) == -1
            ) {
              valid = valid && false;
            }
          }
        });
      if (valid === true) {
        $(this).css("display", "");
      } else {
        $(this).css("display", "none");
      }
    });
  }
}
