//For the second fraction that the user must input
var answerNumTwo = document.getElementById("answerNumTwoUnlike")
var answerDenTwo = document.getElementById("answerDenTwoUnlike")
var numTwoError = document.getElementById("numTwoErrorUnlike")
var denTwoError = document.getElementById("denTwoErrorUnlike")

answerNumTwo.addEventListener("input", function(e) {
  var answer = answerNumTwo.value;
  if (answer != 3){
    answerNumTwo.setAttribute("style", "background-color:red");
    numTwoError.setAttribute("style", "visibility:visible");
    console.log("you suck");
  }
  else{
    answerNumTwo.setAttribute("style", "background-color:green");
    numTwoError.setAttribute("style", "visibility:hidden");
    console.log("you rock!");
  }

}, false);

answerDenTwo.addEventListener("input", function(e) {
  var answer = answerDenTwo.value;
  if (answer != 6){
    answerDenTwo.setAttribute("style", "background-color:red");
    if (answer == 5){
      console.log("Did you remember to find a common denominator?")
      denTwoError.setAttribute("style", "visibility:visible");
    }
    console.log("you suck");
  }
  else{
    answerDenTwo.setAttribute("style", "background-color:green");
    denTwoError.setAttribute("style", "visibility:hidden");
    console.log("you rock!");
  }

}, false);