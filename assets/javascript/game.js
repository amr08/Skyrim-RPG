

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


var khajiit = {

    hp: 120,
    attackPower: 20,
    counterAttack: 15,
}



var dragon = {
    hp: 200,
    attackPower: 10,
    counterAttack: 25,

}

var guy = {
    hp: 150,
    attackPower: 30,
    counterAttack: 20,
}

var assassin = {
    hp: 180,
    attackPower: 35,
    counterAttack: 40,
};


//Assigning character stats to DOM
 
   //$("#char1").val(180, char1.hp);
    $("#char1 p").text("HP " + char1.hp);

    //$("#char2").val(200, char2.hp);
    $("#char2 p").text("HP " + char2.hp);

    //$("#char3").attr(150, char3.hp);
    $("#char3 p").text("HP " + char3.hp);

    //$("#char4").attr('data-num', char4.hp);
    $("#char4 p").text("HP " + char4.hp);

  //


//Battle Scenarios

//char 1 & char 2
function battleOne() {

  

               $("#char1 p").text("HP " + ((char1.hp) - char2.counterAttack));
               var losingGuess = char1.hp = (char1.hp-char2.counterAttack);
        
                
                $("#char2 p").text("HP " + (char2.hp - char1.counterAttack));
                 char2.hp = (char2.hp-char1.counterAttack);
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked dragon for " + char1.attackPower + " damage. Dragon attacked you back for " + char2.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char2.attackPower + " damage. Khajiit attacked you back for " + char1.counterAttack + " damage");
                     }



                            if (losingGuess <= 0 && $("#firstRow a").is("#char1")) { 
                      
                          
                              $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                alert("You Lost! Click restart!");

                                }

                            else if (char2.hp == 125) {
                               $(".battleStats").text("You won! Power increased by 50. Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                        $(".btn.enemy").addClass(".secondDefender");
                     
                              $("#char1").fadeOut();

                            }

    
function rematch() {


        if ((char2.hp === 125) && $("#thirdRow").is(".btn.secondDefender")) {
            console.log("1st running");

            var nextGuess = char2.hp = (char2.hp-char3.counterAttack);
            
             $(".battleStats").text("You attacked some dude for " + char2.attackPower + " damage. Some dude attacked you back for " + char3.counterAttack + " damage");

             }


         if (nextGuess <= 0 && $("#firstRow a").is("#char2")) {
          $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                alert("You Lost! Click restart!");

                                }
        else if (char2 <= 0) {
          $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                alert("You Lost! Click restart!");
         }                   
     
    


};



};
//char 1 & char 3
function battleTwo() {

                $("#char1 p").text("HP " + (char1.hp - char3.counterAttack));
               var losingGuess = char1.hp = (char1.hp-char3.counterAttack);
                $("#char3 p").text("HP " + (char3.hp - char1.counterAttack));
                char3.hp = (char3.hp-char1.counterAttack);
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked some dude for " + char1.attackPower + " damage. Some dude attacked you back for " + char3.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char3.attackPower + " damage. Khajiit attacked you back for " + char1.counterAttack + " damage");
                     }


                    if (losingGuess <= 0 && $("#firstRow a").is("#char1")) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (char3.hp == 60) {
                      $(".battleStats").text("You won! Power increased by 50. Choose another enemy.");
                        alert("You Won! Power increased by 50. Choose another enemy!");
                      $("#char1").fadeOut();
                      char3.hp = 110;
                      $("#char3 p").text("HP " + char3.hp);

                    }

    
      function rematchTwo() {
        console.log("2nd running");

        if ($("#thirdRow a").is("#char2")) {

            var nextGuess = char3.hp = (char3.hp -char2.counterAttack);
             $("#char3 p").text("HP " + (char3.hp - char2.counterAttack));
            
             $(".battleStats").text("You attacked Dragon for " + char3.attackPower + " damage. Dragon attacked you back for " + char2.counterAttack + " damage");

             }


         if (nextGuess <= 0 && $("#firstRow a").is("#char2")) {
          $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                alert("You Lost! Click restart!");

                                }
        else if (char2 <= 0) {
          $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                alert("You Lost! Click restart!");
         }                   
     
   };        

};



//char 1 % char 4
function battleThree() {

               $("#char1 p").text("HP " + (char1.hp - char4.counterAttack));
               var losingGuess =char1.hp = (char1.hp-char4.counterAttack);
               $("#char4 p").text("HP " + (char4.hp - char1.counterAttack));
               char4.hp = (char4.hp-char1.counterAttack); 
                 
                 if ($("#firstRow a").is("#char1")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char1.attackPower + " damage. Assassin attacked you back for " + char4.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + char4.attackPower + " damage. Khajiit attacked you back for " + char1.counterAttack + " damage");
                     }


                     if (losingGuess <= 0 && $("#firstRow a").is("#char1")) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (char4.hp == 135) {
                      $(".battleStats").text("You won! Power increased by 40. Choose another enemy.");
                        alert("You Won! Power increased by 40. Choose another enemy!");
                      char4.hp = 175;
                      $("#char4 p").text("HP " + char4.hp);
                       $("#char1").fadeOut();

                    
                    }

   rematchThree();


        function rematchThree() {
          

          if ($("#thirdRow a").is("#char3")) {
            console.log("running");

            var nextGuess = char4.hp = (char4.hp -char3.counterAttack);
             $("#char4 p").text("HP " + (char4.hp - char3.counterAttack));
            
             $(".battleStats").text("You attacked some dude for " + char4.attackPower + " damage. Some dude attacked you back for " + char3.counterAttack + " damage");

             }


         if (char4.hp === 10) {

          $(".battleStats").text("You won! Power increased by 100. Attack Power increased by 50. Choose another enemy.");
                        alert("You Won! Power increased by 40. Attack Power increased by 50. Choose another enemy!");
                      char4.hp = 110;
                      $("#char4 p").text("HP " + char4.hp);
                       $("#char3").fadeOut();

                     }

                     else if (nextGuess<= 0 && $("#thirdRow").is("#char2")){

                     
             $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                                 alert("You Lost! Click restart!");

        }
}
};

//char 2 & char 3
function battleFour() {

               $("#char2 p").text("HP " + (char2.hp - char3.counterAttack));
               char2.hp = (char2.hp-char3.counterAttack);
               $("#char3 p").text("HP " + (char3.hp - char2.counterAttack));
               var losingGuess = char3.hp = (char3.hp-char2.counterAttack);
                 
                 if ($("#firstRow a").is(char2.hp === 200)) {
                    
                    $(".battleStats").text("You attacked some guy for " + char2.attackPower + " damage. Some guy attacked you back for " + char3.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Dragon for " + char3.attackPower + " damage. Dragon attacked you back for " + char2.counterAttack + " damage");
                     }

                  
                  if (losingGuess <= 0 && $("#firstRow a").is("#char3")) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (char2.hp == 80) {
                      $(".battleStats").text("You won! Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                     $("#char3").fadeOut();

            

                    }

};

//char 2 & char 4
function battleFive() {

               $("#char2 p").text("HP " + (char2.hp - char4.counterAttack));
               var losingGuess = char2.hp = (char2.hp-char4.counterAttack);
               $("#char4 p").text("HP " + (char4.hp - char2.counterAttack));
               char4.hp = (char4.hp-char2.counterAttack);
                 
                 if ($("#firstRow a").is("#char2")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char2.attackPower + " damage. Assassin attacked you back for " + char4.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Dragon for " + char4.attackPower + " damage. Dragon attacked you back for " + char2.counterAttack + " damage");
                     }

               if (losingGuess <= 0 && $("#firstRow a").is("#char2")) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (char4.hp == 55) {
                      $(".battleStats").text("You won! Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                      $("#char2").fadeOut();

                      }



};

//char 3 & char 4
function battleSix() {

               $("#char3 p").text("HP " + (char3.hp - char4.counterAttack));
               var losingGuess = char3.hp = (char3.hp-char4.counterAttack);
               $("#char4 p").text("HP " + (char4.hp - char3.counterAttack));
               char4.hp = (char4.hp-char3.counterAttack);
                 
                 if ($("#firstRow a").is("#char3")) {
                    
                    $(".battleStats").text("You attacked assassin for " + char3.attackPower + " damage. Assassin attacked you back for " + char4.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked some fuggin dude for " + char4.attackPower + " damage. Some fuggin dude attacked you back for " + char3.counterAttack + " damage");
                     }




                if (losingGuess <= 0 && $("#firstRow a").is("#char3")) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (char4.hp == 100) {
                      $(".battleStats").text("You won! Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                      $("#char3").fadeOut();

                      }

};



//Battle Button Clicks

$('.btn-danger').on("click", function() {
//char1 & char2
    if (($("#char1").is(".btn.character") || $("#char1").is(".btn.defender")) && ($("#char2").is(".btn.character") || $("#char2").is(".btn.defender"))) {
       battleOne();


   

}
    
//char1 & char3
    if (($("#firstRow a").is("#char1") || $("#thirdRow a").is("#char1")) && ($("#firstRow a").is("#char3") || $("#thirdRow a").is("#char3"))) {
       battleTwo();

    }

//char1 & char4
     if (($("#firstRow a").is("#char1") || $("#thirdRow a").is("#char1")) && ($("#firstRow a").is("#char4") || $("#thirdRow a").is("#char4"))) {
       battleThree();

    }


//char2 & char3

    if (($("#firstRow a").is("#char2") || $("#thirdRow a").is("#char2")) && ($("#firstRow a").is("#char3") || $("#thirdRow a").is("#char3"))) {
       battleFour();

    }


//char2 & char4
     if (($("#firstRow a").is("#char2") || $("#thirdRow a").is("#char2"))&& ($("#firstRow a").is("#char4")|| $("#thirdRow a").is("#char4"))) {
       battleFive();

    }

    
//char3 & char4 Works!!!!
     if (($("#firstRow a").is("#char3") || $("#thirdRow a").is("#char3")) && ($("#firstRow a").is("#char4") ||$("#thirdRow a").is("#char4"))) {
       battleSix();

    }



});


    
//restart




$('.btn-default').on("click", function() {

    location.reload();

    //restart
});





//end
});
