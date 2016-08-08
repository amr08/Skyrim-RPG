


$(document).ready(function(){

$('.well').css("background", "grey");


$('#firstRow a').click(function() {
    var self= this;
    $('#firstRow a').addClass("enemy");
    $(this).addClass("character");

    $('#firstRow a').detach().appendTo("#secondRow");
    $(this).detach().appendTo("#firstRow");
     $('#secondRow a').removeClass("character");


$('#secondRow a').on("click",function() {
     $(self).detach().appendTo("#thirdRow");
     $(self).addClass("defender");
    });



});




});