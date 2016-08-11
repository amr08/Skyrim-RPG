$(document).ready(function(){

$('.well').css("background", "grey");


wins = 0;

//Player selection
$('#secondRow a').click(function(event) {

var character1 = [];

var defender = [];

event.stopPropagation();

var userCharacter = this;

   
   $(this).appendTo("#firstRow");
   $(this).addClass("character");
   $("#secondRow a").addClass("enemy");

   
$('#secondRow a').click(function(event) {
var userCharacter2 = this;
 

$(userCharacter2).appendTo("#thirdRow");
$(userCharacter2).removeClass("character enemy").addClass("defender");



character1.push(userCharacter);
defender.push(userCharacter2);



			//Battle Button

			$('.btn-danger').on("click", function() {

			  
			//battle 1

			if (($("#char1").is(character1)) && ($("#char2").is(defender))) {
				
				battleOne();
				


			}

			if (($("#char2").is(character1)) && ($("#char1").is(defender))) {
				
				battleOne();
			}

                    //rematch
             		   if (dragon.hp === 127 && wins === 1) {
            			rematch();
						}



			//battle 2

			if (($("#char1").is(character1)) && ($("#char3").is(defender))) {
				console.log("works3");
				battleTwo();
			}

			if (($("#char3").is(character1)) && ($("#char1").is(defender))) {
				console.log("works4");
				battleTwo();
			}


			//battle 3

			if (($("#char1").is(character1)) && ($("#char4").is(defender))) {
				console.log("works5");
			}

			if (($("#char4").is(character1)) && ($("#char1").is(defender))) {
				console.log("works6");
			}

			//bsttle 4 

			if (($("#char2").is(character1)) && (dragon.hp === 202) && ($("#char3").is(defender))) {
				console.log("works7");
			}

			if (($("#char3").is(character1)) && ($("#char2").is(defender))) {
				console.log("works8");
			}

			//bsttle 5

			if (($("#char2").is(character1)) && ($("#char4").is(defender))) {
				console.log("works9");
			}

			if (($("#char4").is(character1)) && ($("#char2").is(defender))) {
				console.log("works10");
			}
			// bsttle 6

			if (($("#char3").is(character1)) && ($("#char4").is(defender))) {
		
			}

			if (($("#char4").is(character1)) && ($("#char3").is(defender))) {
				
			}

			});








	});

function battleOne() {

	
	console.log(character1);


	$("#char1 p").text("HP " + (khajiit.hp - dragon.counterAttack));
      var losingGuess = khajiit.hp = (khajiit.hp - dragon.counterAttack);
    $("#char2 p").text("HP " + (dragon.hp - khajiit.counterAttack));
                         dragon.hp = (dragon.hp - khajiit.counterAttack);

     if ($("#char1").is(character1)) {
                    
         $(".battleStats").text("You attacked dragon for " + (khajiit.attackPower)++ *4  + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");

        }

    else  {
                
             $(".battleStats").text("You attacked Khajiit for " + (dragon.attackPower)++ *6  + " damage. khajiit attacked you back for " + khajiit.counterAttack + " damage");
        }


     if (losingGuess <= 0 && $("#char1").is(character1)) { 
                      
             $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
              alert("You Lost! Click restart!");

          }

     else if (dragon.hp == 127) {
             $(".battleStats").text("You won! Choose another enemy.");
             alert("You Won! Choose another enemy!");
             wins++
             $("#char3").addClass("rematch1");
             $("#char4").addClass("rematch");
             $("#char1").remove().fadeOut();
                            }

};





function battleTwo() {

                $("#char1 p").text("HP " + (khajiit.hp - guy.counterAttack));
                 var losingGuess = khajiit.hp = (khajiit.hp-guy.counterAttack);
                $("#char3 p").text("HP " + (guy.hp - khajiit.counterAttack));
               guy.hp = (guy.hp-khajiit.counterAttack);
                 
                 if ($("#char1").is(character1)) {
                    
                    $(".battleStats").text("You attacked some dude for " + (khajiit.attackPower)++ *4 + " damage. Guy attacked you back for " + guy.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked khajiit for " + (guy.attackPower)++ *2 + " damage. Khajiit attacked you back for " + khajiit.counterAttack + " damage");
                     }



                   if (losingGuess <= 0 && $("#char1").is(character1))  {
                      $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");
                    
}
                    else if (guy.hp == 66) { 
                       
                     $(".battleStats").text("You won! Choose another enemy.");
                       alert("You Won!  Choose another enemy!");
                       $("#char1").fadeOut();
                    
                 
                       }

                    
                    

};


});





var khajiit = {

    hp: 119,
    attackPower: 4,
    counterAttack: 15,
}



var dragon = {
    hp: 202,
    attackPower: 6,
    counterAttack: 25,

}

var  guy= {
    hp: 156,
    attackPower: 2,
    counterAttack: 20,
}

var assassin = {
    hp: 187,
    attackPower: 10,
    counterAttack: 20,
};


    $("#char1 p").text("HP " + khajiit.hp);
    $("#char2 p").text("HP " + dragon.hp);
    $("#char3 p").text("HP " + guy.hp);
    $("#char4 p").text("HP " + assassin.hp);



$('.btn-default').on("click", function() {

    location.reload();

    //restart
});


function rematch() {


        if (dragon.hp === 127 && $(".rematch").has(guy)) {
       console.log("trying to work")
        }
        
            

          //     var nextGuess = char2.hp = (char2.hp-char3.counterAttack);
            
        //      $(".battleStats").text("You attacked some dude for " + char2.attackPower + " damage. Some dude attacked you back for " + char3.counterAttack + " damage");

        //      }


        //  if (nextGuess <= 0 && $("#firstRow a").is("#char2")) {
        //   $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
        //                         alert("You Lost! Click restart!");

        //                         }
        // else if (char2 <= 0) {
        //   $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
        //                         alert("You Lost! Click restart!");
        //  }                   

};


//end

});





