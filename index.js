var buttonColors = ["red", "green", "yellow", "blue"];
var gamePattren = [];

var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
    var randomChosenNum = Math.floor(Math.random() * 6) + 1
    var randomChosenColor = buttonColors[randomChosenNum];
    gamePattren.push(randomChosenColor);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
