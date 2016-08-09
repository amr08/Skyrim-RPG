

//HP

//attachPower

//counterAttackPower
$(document).ready(function(){

$('.well').css("background", "grey");


//Player selection
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
    $(".btn.character.enemy").detach().appendTo("#firstRow").removeClass("enemy");

 });
});
//end player selection





//Storing Character Stats

var char1 = {

    hp: 150,
    attackPower: 5,
    counterAttack: 10,
}


var char2 = {
    hp: 200,
    attackPower: 10,
    counterAttack: 15,

}

var char3 = {
    hp: 170,
    attackPower: 7,
    counterAttack: 10,
}

var char4 = {
    hp: 160,
    attackPower: 10,
    counterAttack: 9,
};


//Assigning character stats to DOM
    $("#char1").attr('data-num', char1.hp, char1.attackPower, char1.counterAttack);
    $("#char1 p").text("HP " + char1.hp);

    $("#char2").attr('data-num', char2.hp, char2.attackPower, char2.counterAttack);
    $("#char2 p").text("HP " + char2.hp);

    $("#char3").attr('data-num', char3.hp, char3.attackPower, char3.counterAttack);
    $("#char3 p").text("HP " + char3.hp);

    $("#char4").attr('data-num', char4.hp, char4.attackPower, char4.counterAttack);
    $("#char4 p").text("HP " + char4.hp);

  //


function battleOne() {

               $("#char1 p").text("HP " + (char1.hp - char2.attackPower));
               $("#char2 p").text("HP " + (char2.hp - char1.attackPower));
                 
                 if ($(".btn.character") == $("#char1")) {

                    $(".battleStats").text("You attacked enemy for " + char1.attackPower + " damage. Enemy attacked you back for " + char2.attackPower + " damage");
                     }

                     else {
                        $(".battleStats").text("You attacked enemy for " + char2.attackPower + " damage. Enemy attacked you back for " + char1.attackPower + " damage");
                     }

};



//Fight sequence
//$('.btn-danger').on("click", function() {

   //var fight = $(".character").val(char1.hp + attackPower - counterAttack);
   //console.log(fight);

    
    //});
//.btn.defender fights .btn.character





//end
$('.btn-danger').on("click", function() {

    if (char1 === $(".btn.character") || $(".btn.defender") && char2 === $("btn.defender") || $(".btn.character")) {
       battleOne();
    };

});




    
//restart


function restart() {
    if (hp === 0) {
    location.reload();
}
    //restart
};






});

//CSS that wont work in style.css
//$('h2').css("color","white", "text-align", "center");
//$('button').css("margin","0 auto");
