//For the first fraction that the user must input
var answerNumOne = document.getElementById("answerNumOneUnlike")
var answerDenOne = document.getElementById("answerDenOneUnlike")
var numOneError = document.getElementById("numOneErrorUnlike")
var denOneError = document.getElementById("denOneErrorUnlike")

answerNumOne.addEventListener("input", function(e) {
  var answer = answerNumOne.value;
  if (answer != 2){
    answerNumOne.setAttribute("style", "background-color:red");
    numOneError.setAttribute("style", "visibility:visible");
    console.log("you suck");
  }
  else{
    answerNumOne.setAttribute("style", "background-color:green");
    numOneError.setAttribute("style", "visibility:hidden");
    console.log("you rock!");
  }

}, false);

answerDenOne.addEventListener("input", function(e) {
  var answer = answerDenOne.value;
  if (answer != 6){
    answerDenOne.setAttribute("style", "background-color:red");
    if (answer == 5){
      console.log("Did you remember to find a common denominator?")
      denOneError.setAttribute("style", "visibility:visible");
    }
    console.log("you suck");
  }
  else{
    answerDenOne.setAttribute("style", "background-color:green");
    denOneError.setAttribute("style", "visibility:hidden");
    console.log("you rock!");
  }

}, false);