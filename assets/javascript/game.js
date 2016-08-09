

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
    attackPower: 20,
    counterAttack: 15,
}


var char2 = {
    hp: 200,
    attackPower: 10,
    counterAttack: 25,

}

var char3 = {
    hp: 170,
    attackPower: 30,
    counterAttack: 5,
}

var char4 = {
    hp: 160,
    attackPower: 35,
    counterAttack: 20,
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



//Battle Scenarios

//char 1 & char 2
function battleOne() {

               $("#char1 p").text("HP " + (char1.hp - char2.attackPower));
               $("#char2 p").text("HP " + (char2.hp - char1.attackPower));
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked dragon for " + char1.attackPower + " damage. Dragon attacked you back for " + char2.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char2.attackPower + " damage. Khajiit attacked you back for " + char1.attackPower + " damage");
                     }

};

//char 1 & char 3
function battleTwo() {

               $("#char1 p").text("HP " + (char1.hp - char3.attackPower));
               $("#char3 p").text("HP " + (char3.hp - char1.attackPower));
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked some dude for " + char1.attackPower + " damage. Some dude attacked you back for " + char3.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char3.attackPower + " damage. Khajiit attacked you back for " + char1.attackPower + " damage");
                     }

};

//char 1 % char 4
function battleThree() {

               $("#char1 p").text("HP " + (char1.hp - char4.attackPower));
               $("#char4 p").text("HP " + (char4.hp - char1.attackPower));
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char1.attackPower + " damage. Assassin attacked you back for " + char4.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char4.attackPower + " damage. Khajiit attacked you back for " + char1.attackPower + " damage");
                     }

};

//char 2 & char 3
function battleFour() {

               $("#char2 p").text("HP " + (char2.hp - char3.attackPower));
               $("#char3 p").text("HP " + (char3.hp - char2.attackPower));
                 
                 if ($("#firstRow a").is("#char2")) {
                    
                    $(".battleStats").text("You attacked some guy for " + char2.attackPower + " damage. Some guy attacked you back for " + char3.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Dragon for " + char3.attackPower + " damage. Dragon attacked you back for " + char2.attackPower + " damage");
                     }

};

//char 2 & char 4
function battleFive() {

               $("#char2 p").text("HP " + (char2.hp - char4.attackPower));
               $("#char4 p").text("HP " + (char4.hp - char2.attackPower));
                 
                 if ($("#firstRow a").is("#char2")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char2.attackPower + " damage. Assassin attacked you back for " + char4.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Dragon for " + char4.attackPower + " damage. Dragon attacked you back for " + char2.attackPower + " damage");
                     }

};

//char 
function battleSix() {

               $("#char3 p").text("HP " + (char3.hp - char4.attackPower));
               $("#char4 p").text("HP " + (char4.hp - char3.attackPower));
                 
                 if ($("#firstRow a").is("#char3")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char3.attackPower + " damage. Assassin attacked you back for " + char4.attackPower + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked some fuggin dude for " + char4.attackPower + " damage. Some fuggin dude attacked you back for " + char3.attackPower + " damage");
                     }

};





//Battle Button Clicks

$('.btn-danger').on("click", function() {
//char1 & char2
    if ((char1 === $(".btn.character") || $(".btn.defender")) && (char2 === $("btn.defender") || $(".btn.character"))) {
       battleOne();
   
    };



//char1 & char3
    if ((char1 === $(".btn.character") || $(".btn.defender")) && (char3 === $("btn.defender") || $(".btn.character"))) {
       battleTwo();

    };



//char1 & char3
    if ((char1 === $(".btn.character") || $(".btn.defender")) && (char4 === $("btn.defender") || $(".btn.character"))) {
       battleThree();

    };

   

//char2 & char3

    if ((char2 === $(".btn.character") || $(".btn.defender")) && (char3 === $("btn.defender") || $(".btn.character"))) {
       battleFour();

    };



//char2 & char4
    if ((char2 === $(".btn.character") || $(".btn.defender")) && (char4 === $("btn.defender") || $(".btn.character"))) {
       battleFive();

    };

    

//char3 & char4
    if ((char3 === $(".btn.character") || $(".btn.defender")) && (char4 === $("btn.defender") || $(".btn.character"))) {
       battleSix();

    };

});




    
//restart


function restart() {
    if (hp === 0) {
    location.reload();
}
    //restart
};





//end
});

