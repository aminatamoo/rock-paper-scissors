
/*Variables needed*/

var choices = ["Rock", "Paper", "Scissors"];
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;





/*Listen for button clicks*/

$("#rock").click(function(event){
  var play_you = "Rock";
  $("#play_you").text(play_you);
  var play_computer = computer_move();
  compare(play_you, play_computer);
})

$("#paper").click(function(event){
  var play_you = "Paper";
  $("#play_you").text(play_you);
  var play_computer = computer_move();
  compare(play_you, play_computer);
})

$("#scissors").click(function(event){
  var play_you = "Scissors";
  $("#play_you").text(play_you);
  var play_computer = computer_move();
  compare(play_you, play_computer);
})

function computer_move(){
  var play_computer = Math.floor(Math.random()*(3 - 0)) + 0;
  play_computer = choices[play_computer];
  $("#play_computer").text(play_computer);

  /*$("#game_won").empty();
  $("#game_lost").empty(verdict);
  $("#game_draw").empty(verdict);*/

  return play_computer;
}

function compare(you, computer){

  var verdict = 'lose';
  if (you == computer){
    verdict = 'draw';
  }
  if ((you == "Rock") && (computer == "Scissors")){
    verdict = 'win';
  }
  if ((you == "Paper") && (computer == "Rock")){
    verdict = 'win';
  }
  if ((you == "Scissors") && (computer == "Paper")){
    verdict = 'win';
  }
  if (verdict == 'win'){
    won++;
    $("#game_won").text(won);
  }

  if (verdict == 'lose'){
    lost++;
    $("#game_lost").text(lost);
  }

  if (verdict == 'draw'){
    draw++;
    $("#game_draw").text(draw);
  }
  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);

  console.log(verdict);

}
