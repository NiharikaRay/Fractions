//For the final fraction that the user must input
var finalAnswerNum = document.getElementById("finalAnswerNumUnlike")
var finalAnswerDen = document.getElementById("finalAnswerDenUnlike")
var finalNumError = document.getElementById("finalNumErrorUnlike")
var finalDenError = document.getElementById("finalDenErrorUnlike")
var done = document.getElementById("done")

finalAnswerNum.addEventListener("input", function(e) {
  var answer = finalAnswerNum.value;
  if (answer != 5){
    finalAnswerNum.setAttribute("style", "background-color:red");
    finalNumError.setAttribute("style", "visibility:visible");
    console.log("you suck");
  }
  else{
    finalAnswerNum.setAttribute("style", "background-color:green");
    finalNumError.setAttribute("style", "visibility:hidden");
    console.log("you rock!");
  }

}, false);

finalAnswerDen.addEventListener("input", function(e) {
  var answer = finalAnswerDen.value;
  if (answer != 6){
    finalAnswerDen.setAttribute("style", "background-color:red");
    if (answer == 5){
      console.log("Did you remember to find a common denominator?")
      finalDenError.setAttribute("style", "visibility:visible");
    }
    console.log("you suck");
  }
  else{
    finalAnswerDen.setAttribute("style", "background-color:green");
    finalDenError.setAttribute("style", "visibility:hidden");
    done.setAttribute("style", "visibility:visible");
    console.log("you rock!");
  }

}, false);