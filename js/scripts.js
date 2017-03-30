//Back End Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turn = 0;

}

Player.prototype.tally = function(int) {
  return this.turn += int;
}


//Random Number Generator
var randomInt = function() {
  return Math.floor((Math.random() * 6) + 1);
  console.log(randomInt);
}


//Front End Logic
$(function() {
  $("form").submit(function(event) {
    console.log(randomInt());
    event.preventDefault();

      var playerOne = $("input#player1").val();
      var newPlayerOne = new Player(playerOne);
      console.log(newPlayerOne);

      var playerTwo = $("input#player2").val();
      var newPlayerTwo = new Player(playerTwo);
      console.log(newPlayerTwo);

      $("button#player1-roll").click(function() {
        var roll = randomInt();
        $("#player1-rolled-number").text(roll);
        $("#player1-new-score").text(newPlayerOne.tally(roll));

        console.log(newPlayerOne);

    });
  });
});


//push number into turn
