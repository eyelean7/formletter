$(function() {
  $("form").submit(function(event){
    var inputName= $("#inputName").val();
    $(".name").text(inputName);

    event.preventDefault();
    $("#letter").show();
  });
});
