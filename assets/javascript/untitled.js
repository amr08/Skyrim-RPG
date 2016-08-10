

$(document).ready(function(){

$('.well').css("background", "grey");


//Player selection
 $('#firstRow a').click(function(event) {
event.stopPropagation();
userPick = this;
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

console.log(userPick);
if (userPick === char1) {
console.log("wprks");

}

 });





 
     
      

     

//char1 & char2

    

    



var char1 = {

    hp: 119,
    attackPower: 20,
    counterAttack: 15,
}



var char2 = {
    hp: 202,
    attackPower: 10,
    counterAttack: 25,

}

var char3 = {
    hp: 156,
    attackPower: 30,
    counterAttack: 5,
}

var char4 = {
    hp: 187,
    attackPower: 35,
    counterAttack: 20,
};


//Assigning character stats to DOM
 
  
    $("#char1 p").text("HP " + char1.hp);
    $("#char2 p").text("HP " + char2.hp);
    $("#char3 p").text("HP " + char3.hp);
    $("#char4 p").text("HP " + char4.hp);



$('.btn-danger').on("click", function() {

  });
//char1 & char2

    // if (($("#char1").is(".btn.character") || $("#char1").is(".btn.defender")) && ($("#char2").is(".btn.character") || $("#char2").is(".btn.defender"))) {
    //    battleOne();


   



//      if (((char1.hp ===119 && char2.hp === 202) && ($("#char1").is(".defender") || $("#char2").is(".defender")))) {
//  console.log("battle one");
//  //battleOne();
       


//  }
    
// // // //char1 & char3
//     if (((char1.hp === 119 && char3.hp === 156) && ($("#char1").is(".defender") || $("#char3").is(".defender")))) {
//       console.log("battle two");

//        //battleTwo();

//     }

// //char1 & char4
//      if (($("#firstRow a").is("#char1") || $("#thirdRow a").is("#char1")) && ($("#firstRow a").is("#char4") || $("#thirdRow a").is("#char4"))) {
//        battleThree();

//     }


// //char2 & char3

//     if (($("#firstRow a").is("#char2") || $("#thirdRow a").is("#char2")) && ($("#firstRow a").is("#char3") || $("#thirdRow a").is("#char3"))) {
//        battleFour();

//     }


// //char2 & char4
//      if (($("#firstRow a").is("#char2") || $("#thirdRow a").is("#char2"))&& ($("#firstRow a").is("#char4")|| $("#thirdRow a").is("#char4"))) {
//        battleFive();

//     }

    
// //char3 & char4 Works!!!!
//      if (($("#firstRow a").is("#char3") || $("#thirdRow a").is("#char3")) && ($("#firstRow a").is("#char4") ||$("#thirdRow a").is("#char4"))) {
//        battleSix();

//     }





});
