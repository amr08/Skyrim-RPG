

//HP

//attachPower

//counterAttackPower
$(document).ready(function(){

$('.well').css("background", "grey");


$('#firstRow a').click(function() {
   var self=this;
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

//$('.btn-danger').on("click", function() {


//}

var hp = [150,160,170,200];

var attackPower = [25,50,30,10];

var counterAttack = [10, 30,5,20];

var counter=0


 
 
 for(var i = 0; i < hp.length; i++) {
    //var playerPick = $('a:first');
    //console.log(playerPick.attr('data-num', hp[i]));
 

    };

$('#char1').data(hp[0]);
$('#char2').data(hp[1]);
$('#char3').data(hp[2]);
$('#char4').data(hp[3]);




    

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
