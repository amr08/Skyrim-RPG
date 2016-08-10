$(document).ready(function(){


// var character = [];

// var defender = [];

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
				console.log("works");
				battleOne();


			}

			if (($("#char2").is(character1)) && ($("#char1").is(defender))) {
				console.log("works2");
				battleOne();
			}

			//battle 2

			if (($("#char1").is(character1)) && ($("#char3").is(defender))) {
				console.log("works3");
			}

			if (($("#char3").is(character1)) && ($("#char1").is(defender))) {
				console.log("works4");
			}


			//battle 3

			if (($("#char1").is(character1)) && ($("#char4").is(defender))) {
				console.log("works5");
			}

			if (($("#char4").is(character1)) && ($("#char1").is(defender))) {
				console.log("works6");
			}

			//bsttle 4 

			if (($("#char2").is(character1)) && ($("#char3").is(defender))) {
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
				console.log("works11");
			}

			if (($("#char4").is(character1)) && ($("#char3").is(defender))) {
				console.log("works12");
			}

			});








	});

function battleOne() {

	console.log("BattleOne Test")
	console.log(character1);

};


});





var khajiit = {

    hp: 119,
    attackPower: 20,
    counterAttack: 15,
}



var dragon = {
    hp: 202,
    attackPower: 10,
    counterAttack: 25,

}

var  guy= {
    hp: 156,
    attackPower: 30,
    counterAttack: 5,
}

var assassin = {
    hp: 187,
    attackPower: 35,
    counterAttack: 20,
};


    $("#char1 p").text("HP " + khajiit.hp);
    $("#char2 p").text("HP " + dragon.hp);
    $("#char3 p").text("HP " + guy.hp);
    $("#char4 p").text("HP " + assassin.hp);







//end

});





