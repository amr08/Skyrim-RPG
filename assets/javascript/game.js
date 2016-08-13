$(document).ready(function(){

$('.well').css("background", "grey");


wins = 0;

secondWin = 0;

thirdWin = 0;

anotherWin = 0;

fourthWin= 0;

fifthWin= 0;

finalsWin = 0;

winSix = 0;

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

      if (($("#char3").is(character1)) && (guy.hp === 156, 141)  && ($("#char1").is(defender))) {
        console.log("works4");
        battleTwo();
      }
                      //rematch2
                      if (guy.hp === 66 && secondWin === 1) {
                         rematch2();
                        }

      //battle 3

      if (($("#char1").is(character1)) && ($("#char4").is(defender))) {
        console.log("works5");
        battleThree();
      }
//look at this code its where it broke
      if (($("#char4").is(character1)) && ($("#char1").is(defender))) {
        console.log("works6");
        battleThree();
      }

            if (assassin.hp === 97 && thirdWin === 1) {
                         rematch3();
                         console.log("send to rematch 3");
                        }

      //battle 4 

      if (($("#char2").is(character1))  && (khajiit !== $(".rematch4")) && (dragon.hp === 202, 182) && ($("#char3").is(defender))) {
        console.log("works7");
        battleFour();


      }

       if (dragon.hp === 62 && fourthWin === 1) {
                         rematch4();
                         console.log("send to rematch 4");
                        }

      if (($("#char3").is(character1)) && (guy.hp === 156, 131) && ($("#char2").is(defender))) {
        console.log("works8");

        battleFour();
      }

      //bsttle 5

      // if (($("#char2").is(character1)) && (dragon.hp === 202, 182) && ($("#char4").is(defender))) {
      //  console.log("works9");
      //  battleFive();

      // }

      // if (($("#char4").is(character1)) && (assassin.hp === 187, 162) && ($("#char2").is(defender))) {
      //  console.log("works10");
      //  battleFive();
      // }

      // if (dragon.hp === 42 && fifthWin === 1) {
   //                      rematch5();
   //                      console.log("send to rematch 5");
   //                      }
      // // bsttle 6

      // if (($("#char3").is(character1)) && (guy.hp === 156, 136) && ($("#char4").is(defender))) {
     //        console.log("works11");
     //        battleSix();
      // }

      // if (($("#char4").is(character1)) && (assassin.hp === 187, 161) && ($("#char3").is(defender))) {
      //  console.log("works12");
      //  battleSix();
      // }

      // if (assassin.hp === 27 && winSix === 1) {
   //                      rematch6();
   //                      console.log("send to rematch 5");
   //                     }

      });



  });

function battleOne() {


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

  console.log(character1);

                $("#char1 p").text("HP " + (khajiit.hp - guy.counterAttack));
                 var losingGuess = khajiit.hp = (khajiit.hp-guy.counterAttack);
                $("#char3 p").text("HP " + (guy.hp - khajiit.counterAttack));
                                  guy.hp = (guy.hp - khajiit.counterAttack);
                 
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
                       $("#char1").remove().fadeOut();
                       secondWin++
                       $("#char2").addClass("rematch2");
                       $("#char4").addClass("rematch22");
                    
                 
                     }

                   
                    

};



function battleThree() {

  $("#char1 p").text("HP " + (khajiit.hp - assassin.counterAttack));
               var losingGuess =khajiit.hp = (khajiit.hp-assassin.counterAttack);
               $("#char4 p").text("HP " + (assassin.hp - khajiit.counterAttack));
               assassin.hp = (assassin.hp-khajiit.counterAttack); 
                 
                 if ($("#char1").is(character1)) {
                    
                    $(".battleStats").text("You attacked assassin for " + (khajiit.attackPower)++ *4 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Khajiit for " + (assassin.attackPower)++ *10 + " damage. Khajiit attacked you back for " + khajiit.counterAttack + " damage");
                     }


                     if (losingGuess <= 0 && $("#char1").is(character1)) { 
                                
                                    
                        $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");

                        }

                    else if (assassin.hp == 97) {
                      $(".battleStats").text("You won! Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                     
                       $("#char1").remove().fadeOut();
                       thirdWin++
                       $("#char2").addClass("rematch3");
                       $("#char3").addClass("rematch33");


                    
                    }
 
    };



    function battleFour() {
    console.log("battle4");

               $("#char2 p").text("HP " + (dragon.hp - guy.counterAttack));
               dragon.hp = (dragon.hp-guy.counterAttack);
               $("#char3 p").text("HP " + (guy.hp - dragon.counterAttack));
               var losingGuess = guy.hp = (guy.hp-dragon.counterAttack);
                 

                 console.log(character1);
                if ($("#char2").is(character1)) {
                    
                    $(".battleStats").text("You attacked some guy for " + (dragon.attackPower)++ *6 + " damage. Some guy attacked you back for " + guy.counterAttack + " damage");

                     }

                 else  {
                
                        $(".battleStats").text("You attacked Dragon for " + (guy.attackPower)++ *2 + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");
                     }

                  
                  if (losingGuess <= 0 && $("#char2").is(character1))  { 

                     $(".battleStats").text("You won! Choose another enemy.");
                        alert("You Won! Choose another enemy!");
                     $("#char3").fadeOut();
                     fourthWin++
                     $("#char1").addClass("rematch4");
                      $("#char4").addClass("rematch44");

                                
                                    
                       
                        }


                    else if (dragon.hp == 62) {
                      $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
                        alert("You Lost! Click restart!");


            }

                    

};


// function battleFive() {

//                $("#char2 p").text("HP " + (dragon.hp - assassin.counterAttack));
//                dragon.hp = (dragon.hp-assassin.counterAttack);
//                $("#char4 p").text("HP " + (assassin.hp - dragon.counterAttack));
//                var losingGuess = assassin.hp = (assassin.hp-dragon.counterAttack);
                 
//                  if ($("#char2").is(character1)) {
                    
//                     $(".battleStats").text("You attacked assassin for " + (dragon.attackPower)++ *6 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

//                      }

//                  else  {
                
//                         $(".battleStats").text("You attacked Dragon for " + (assassin.attackPower)++ *6 + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");
//                      }

//                if (losingGuess <= 0 && $("#char2").is(character1)) { 
                                
//                                   $(".battleStats").text("You won! Choose another enemy.");
//                         alert("You Won! Choose another enemy!");
//                        $("#char4").fadeOut();  
//                        fifthWin++
                       

//                         }

//                      else if (dragon.hp == 42) {
//                      $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
//                         alert("You Lost! Click restart!");

//                        }



// };

// function battleSix() {

//                $("#char3 p").text("HP " + (guy.hp - assassin.counterAttack));
//                var losingGuess = guy.hp = (guy.hp-assassin.counterAttack);
//                $("#char4 p").text("HP " + (assassin.hp - guy.counterAttack));
//                assassin.hp = (assassin.hp-guy.counterAttack);
                 
//                  if ($("#char3").is(character1)) {
                    
//                     $(".battleStats").text("You attacked assassin for " + (guy.attackPower)++ *2 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

//                      }

//                  else  {
                
//                         $(".battleStats").text("You attacked some fuggin dude for " + (assassin.attackPower)++ *10 + " damage. Some fuggin dude attacked you back for " + guy.counterAttack + " damage");
//                      }




//                 if (losingGuess <= 0 && ($("#char3").is(character1))) { 
                                
                                    
//                         $(".battleStats").text("YOU LOSE!! Click Restart to try again.");
//                         alert("You Lost! Click restart!");

//                         }

//                     else if (assassin.hp == 27) {
//                       $(".battleStats").text("You won! Choose another enemy.");
//                         alert("You Won! Choose another enemy!");
//                       $("#char3").fadeOut();
//                       winSix++

//                       }

// };

});

//player stats

var khajiit = {

    hp: 119,
    attackPower: 1,
    counterAttack: 15,
}

var dragon = {
    hp: 202,
    attackPower: 1,
    counterAttack: 25,

}

var  guy= {
    hp: 156,
    attackPower: 1,
    counterAttack: 20,
}

var assassin = {
    hp: 187,
    attackPower: 1,
    counterAttack: 20,
};

//player stat html display
    $("#char1 p").text("HP " + khajiit.hp);
    $("#char2 p").text("HP " + dragon.hp);
    $("#char3 p").text("HP " + guy.hp);
    $("#char4 p").text("HP " + assassin.hp);


//reset button
$('.btn-default').on("click", function() {

    location.reload();

});



//rematch section

function rematch() {

$(".rematch1").click(function() {

  $('.battleButton').on("click", function() {
        // if (dragon.hp === 127 && $(".rematch").has(guy)) {
       console.log("trying to work")
        
        $("#char2 p").text("HP " + (dragon.hp - guy.counterAttack));
             dragon.hp = (dragon.hp-guy.counterAttack);
            
             $(".battleStats").text("You attacked some dude for " + (dragon.attackPower)++ *4 + " damage. Some dude attacked you back for " + guy.counterAttack + " damage");

             
        $("#char3 p").text("HP " + (guy.hp - dragon.counterAttack));
                   var nextLoser = guy.hp = (guy.hp-dragon.counterAttack);


          if (dragon.hp == -13) {
               $(".battleStats").text("You both killed each other!! Click Restart to try again.");
                        alert("You both died!! Click restart!");

                    $("#char3").removeClass("rematch1");
          } 


  
          });                    

      });

$(".rematch").click(function() {

  $('.battleButton').on("click", function() {
        if (dragon.hp === 127) {
     
        
        $("#char2 p").text("HP " + (dragon.hp - assassin.counterAttack));
             dragon.hp = (dragon.hp-assassin.counterAttack);
            
             $(".battleStats").text("You attacked the assassin for " + (dragon.attackPower)++ *4 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

             
        $("#char4 p").text("HP " + (assassin.hp - dragon.counterAttack));
                    assassin.hp = (assassin.hp-dragon.counterAttack);


          if (dragon.hp == -13) {
             $(".battleStats").text(" You died! Too much confidence in the dragon");
                       alert("You died! Too much confidence in the dragon. Click restart!");

                    $("#char3").removeClass("rematch");
           } 
  }
          });                    

      });

};


function rematch2() {
 
 $(".rematch2").click(function() {

  $('.battleButton').on("click", function() {
     
        
        $("#char3 p").text("HP " + (guy.hp - dragon.counterAttack));
           var guyLoser = guy.hp = (guy.hp-dragon.counterAttack);
            
             $(".battleStats").text("You attacked dragon for " + (guy.attackPower)++ *2 + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");

             
         $("#char2 p").text("HP " + (dragon.hp - guy.counterAttack));
         dragon.hp = (dragon.hp-guy.counterAttack);


         if (guyLoser <= 0) {
          $(".battleStats").text("That was quick! Click restart to try again.");
                        alert("That was quick! The dragon cannot be tamed! Click restart!");
         }

                  $("#char3").removeClass("rematch2");
  
          });                    

      });


$(".rematch22").click(function() {

  $('.battleButton').on("click", function() {
        
     
        
        $("#char3 p").text("HP " + (guy.hp - assassin.counterAttack));
             guy.hp = (guy.hp-assassin.counterAttack);
            
             $(".battleStats").text("You attacked the assassin for " + (guy.attackPower)++ *4 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

             
        $("#char4 p").text("HP " + (assassin.hp - guy.counterAttack));
                    assassin.hp = (assassin.hp-guy.counterAttack);


           if (guy.hp == -14) {
              $(".battleStats").text(" Wrong approach!  Try again!");
                        alert("You died!  Click restart!");

                     $("#char3").removeClass("rematch22");
            } 
  
          });                    

      });
};

console.log(assassin.hp);




function rematch3() {

  $(".rematch33").click(function() {

         $('.battleButton').on("click", function() {

 
            

            assassin.hp = (assassin.hp  -guy.counterAttack);
            $("#char4 p").text("HP " + (assassin.hp +20 - guy.counterAttack));
            
             $(".battleStats").text("You attacked some dude for " + (assassin.attackPower)++ *10 + " damage. Some dude attacked you back for " + guy.counterAttack + " damage");



            $("#char3 p").text("HP " + (guy.hp - assassin.attackPower*10));
               guy.hp = (guy.hp -assassin.attackPower*10);
            

console.log(assassin.hp);
         if (assassin.hp === 57) {

          $(".battleStats").text("You've grown in strength! Choose another enemy.");
                     alert("You've grown in strength! Choose another enemy!");
                 

                      $("#char3").fadeOut();
                       $("#char3").removeClass("rematch33");
                       $("#char2").addClass("final");
                       $("#char2").removeClass("rematch3");
                       anotherWin++
         
              finals();
       }
        

         

       });

    });


  $(".rematch3").click(function(event) {

    event.stopPropagation();

         $('.battleButton').on("click", function(event) {
event.stopPropagation();
 
            

            assassin.hp = (assassin.hp - dragon.counterAttack);
            $("#char4 p").text("HP " + (assassin.hp +20 - dragon.counterAttack));
            
             $(".battleStats").text("You attacked dragon for " + (assassin.attackPower)++ *10 + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");



            $("#char2 p").text("HP " + (dragon.hp - (assassin.attackPower *10)));
               dragon.hp = (dragon.hp - (assassin.attackPower *10));
            


         if (assassin.hp === 22) {

          $(".battleStats").text("You won!");
                    alert("You won!");

                  $("#char2").fadeOut();
                       $("#char2").removeClass("rematch3");
                       $("#char3").addClass("final2");
                        $("#char3").removeClass("rematch33");
                       finalsWin++
                    
 finals();
                    }
        

         

    });

     });


};



      

                    
        

function finals() {


  console.log("finals tester");

$(".final").click(function(event) {

    event.stopPropagation();

         $('.battleButton').on("click", function(event) {
event.stopPropagation();
 
            
if (anotherWin===1) {

            assassin.hp = (assassin.hp - dragon.counterAttack);
            $("#char4 p").text("HP " + "17");

            
             $(".battleStats").text("You attacked dragon for " + (assassin.attackPower)++ *10 + " damage. Dragon attacked you back for " + dragon.counterAttack + " damage");



            $("#char2 p").text("HP " + (dragon.hp - assassin.counterAttack));
               dragon.hp = (dragon.hp - assassin.counterAttack);

           }
            
  if (dragon.hp < 0) {

      $(".battleStats").text("You won! GAME OVER!!");
                    alert("You won!");

                  $("#char2").fadeOut();
                       $("#char2").removeClass("final");

                      
                        


  }


});

     });



$(".final2").click(function(event) {

 event.stopPropagation();
         $('.battleButton').on("click", function(event) {

 event.stopPropagation()
            
            if (finalsWin===1) {

             assassin.hp = (assassin.hp - guy.counterAttack);
            $("#char4 p").text("HP " + "10");
            
             $(".battleStats").text("You attacked fuggin guy for " + (assassin.attackPower)++ *10 + " damage. Fuggin guy attacked you back for " + guy.counterAttack + " damage");



           $("#char3 p").text("HP " + "0");
              guy.hp = (guy.hp - (assassin.attackPower));
            
     
 console.log(assassin.hp);
}

 if (assassin.hp === -103) {

 $(".battleStats").text("You won! GAME OVER");
       alert("You won! GAME OVER!");

     $("#char3").fadeOut();
         $("#char3").removeClass("rematch3");
                     $("#char3").removeClass("final2");
                       
        }      



       

       });
   });   

};



// function rematch4 () {



// console.log("rematch4 working");


// $(".rematch4").click(function() {

//  $('.battleButton').on("click", function() {

//    if (dragon.hp === 62) {
        
//        console.log("trying to work")
        
//         $("#char2 p").text("HP " + (dragon.hp - khajiit.counterAttack));
//              khajiit.hp = (khajiit.hp-dragon.counterAttack);
            
//              $(".battleStats").text("You attacked some dude for " + (dragon.attackPower)++ *4 + " damage. Some dude attacked you back for " + guy.counterAttack + " damage");

             
//         $("#char1 p").text("HP " + (khajiit.hp - dragon.attackPower *6));
//                    var nextLoser =khajiit.hp = (khajiit.hp-dragon.attackPower * 6);


//           if (dragon.hp == -23) {
//                 $(".battleStats").text("You both killed each other!! Click Restart to try again.");
//                         alert("You both died!! Click restart!");

//                    $("#char3").removeClass("rematch1");
//            } 

// }
  
//           });                    

//       });

// $(".rematch44").click(function() {

//  $('.battleButton').on("click", function() {
//         if (dragon.hp === 127) {
     
        
//         $("#char2 p").text("HP " + (dragon.hp - assassin.counterAttack));
//              dragon.hp = (dragon.hp-assassin.counterAttack);
            
//              $(".battleStats").text("You attacked the assassin for " + (dragon.attackPower)++ *4 + " damage. Assassin attacked you back for " + assassin.counterAttack + " damage");

             
//         $("#char4 p").text("HP " + (assassin.hp - dragon.counterAttack));
//                     assassin.hp = (assassin.hp-dragon.counterAttack);


//           if (dragon.hp == -13) {
//              $(".battleStats").text(" You died! Too much confidence in the dragon");
//                        alert("You died! Too much confidence in the dragon. Click restart!");

//                     $("#char3").removeClass("rematch");
//            } 
//   }
//           });                    

//       });

// // };
// };


// function rematch5 () {
// console.log("rematch5 working");
// };

// function rematch6 () {
// console.log("rematch6 working");
// };

//end

});



