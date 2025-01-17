var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $('#level-title2').text("Level "+level);
        nextSequence();
        started=true;
    }
});
$('.btn').click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
    
            }
    
            
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");
          startOver();

    }
}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $('#level-title2').text("Level "+level);

   var randomChosenColour=buttonColours[Math.floor(Math.random()*4)];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);

}
function playSound(name){
    var audio=new Audio("assets/sounds_"+name+".mp3");
    audio.play();
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}