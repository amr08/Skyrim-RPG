

//HP

//attachPower

//counterAttackPower
$(document).ready(function(){

$('.well').css("background", "grey");



$('#firstRow a').click(function(event) {
event.stopPropagation();
var self = $(this);
   $(this).addClass("character");
   $('#firstRow a').addClass("enemy");
   $(this).removeClass("enemy");
   $(".btn.enemy").detach().appendTo("#secondRow");

  

$('#secondRow a').click(function(event) {
   
    event.stopPropagation();
    $(this).addClass("defender");
    $(this).removeClass("enemy");
    $(this).removeClass("character");
    $(".btn.defender").detach().appendTo("#thirdRow");
    $(".btn.character.enemy").detach().appendTo("#firstRow");
 });
});

//$('.btn-danger').on("click", function() {


//}

var hp = [150,160,170,200];

var attackPower = [25,50,30,10];

var counterAttack = [10, 30,5,20];

var counter=0



 
 for(var i = 0; i < hp.length; i++) {
    console.log(hp[i]);
}

     //$("#char1").attr('data-num', hp[i]);
     //$("#char2").attr('data-num', hp[i]);
    //console.log($("#char1").text(hp[i]));
   

    //});






    

//$('#btn-danger').on("click"), function() {
    //$('a:first').val() attackPower
//}



if (hp === 0) {
location.reload();
    //restart
};






});

//CSS that wont work in style.css
//$('h2').css("color","white", "text-align", "center");
//$('button').css("margin","0 auto");
