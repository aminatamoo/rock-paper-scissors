
/*Variables needed*/

var choices = ["rock", "paper", "scissors"];
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
/*var remainder = played % 5;*/


//Listen for button clicks

$("img").click(function(event){
  var play_you = this.getAttribute("id");
  $("#play_you").text(play_you);
  var play_computer = computer_move();
  compare(play_you, play_computer);
  assign_winner();
  close();
})

//Functions

function computer_move(){
  var play_computer = Math.floor(Math.random()*(3 - 0)) + 0;
  play_computer = choices[play_computer];
  $("#play_computer").text(play_computer);
  return play_computer;
}

function compare(you, computer){

  var verdict = 'lose';

  if (you == computer){

        verdict = 'draw';
  }
  if (((you == "rock") && (computer == "scissors"))||
     ((you == "paper") && (computer == "rock"))||
     ((you == "scissors") && (computer == "paper"))){

        verdict = 'win';
  }

  switch (verdict){
    case 'win':
      won++;
      $("#game_won").text(won);
      break;
    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }
  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);

}

//Modal functionality


function assign_winner(){

if ((played == 20) && (won > lost )){
  $('#winner').show();
  $('#loser').hide();
}
else if ((played == 20) && (won < lost )){
  $('#loser').show();
  $('#winner').hide();
}
}

/*function close(){
  $('.main_close').click(function (event){
    $('#loser').hide();
    $('#winner').hide();
});
}*/
