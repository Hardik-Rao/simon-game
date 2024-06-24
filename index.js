

var buttonColor=["green","blue","red","yellow"];
var gamePattern=[];
var userClickPattern=[];
var level=0;
var started=false;
$(document).keypress(function(){
if(!started){
   
nextSequence();
started=true;
}
});

$(".btn").click(function(){
var choosenColor=$(this).attr("id");
    userClickPattern.push(choosenColor)
playSound(choosenColor);
animatePress(choosenColor);
checkAnswer(userClickPattern.length-1);
});

function checkAnswer(currentLevel){
   if(gamePattern[currentLevel]==userClickPattern[currentLevel]){
    if(gamePattern.length==userClickPattern.length){
    setTimeout(function(){
        nextSequence();

    },1000);}

   } 
else{
playSound("wrong");
$("body").addClass("game-over");
$("#level-title").text("Game over,press any key to restart");
setTimeout(function(){
 $("body").removeClass("game-over");
},100)
startOver();
}
}


function nextSequence(){
    userClickPattern=[];
    level++;
    $("#level-title").text("Level  "+level)
    var randomNo=Math.floor(Math.random()*4); 
    var randomColor=buttonColor[randomNo];
    gamePattern.push(randomColor);
    $("#" +randomColor).fadeIn(100).fadeOut(100).fadeIn(100);//here randomColor is a variable so ID selector looks like"#"+randomColor
    playSound(randomColor);

}

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
$("#" +currentColor).removeClass("pressed")
    },100)
}

 function playSound(color){
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}
function startOver(){
    level=0;
   gamePattern=[]
    started=false;
}
