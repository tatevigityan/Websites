function addEl()
{
    let value = $('#param').val();
    let option = document.getElementsByName('option');
    if (option[0].checked)
    {
        $('#firstEl').html(value);
        $('#lastEl').html('');
    }
    else if (option[1].checked)
    {
        $('#firstEl').html('');
        $('#lastEl').html(value);
    }
}

function clone()
{
    let clone=$("#paragraph").clone();
    $("#firstEl").html("");
    $("#lastEl").html(clone); 
}

function minSize()
{
    $('#image').attr({width: "180px"});
}

function deleteImg()
{
    $('#image').remove();
}

function animation_()
{
    $("#image1").animate({
    width: "300px",
    opacity: 1,
    marginLeft: "6px",
  }, 1500 );

}

$(document).ready(function(){
    $('.table-filters input').on('input', function () {
        filterTable($(this).parents('table'));
    });

    function filterTable($table) {
        var $filters = $table.find('.table-filters td');
        var $rows = $table.find('.table-data');
        $rows.each(function (rowIndex) {
            var valid = true;
            $(this).find('td').each(function (colIndex) {
                if ($filters.eq(colIndex).find('input').val()) {
                    if ($(this).html().toLowerCase().indexOf(
                    $filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                        valid = valid && false;
                    }
                }
            });
            if (valid === true) {
                $(this).css('display', '');
            } else {
                $(this).css('display', 'none');
            }
        });
    }
});