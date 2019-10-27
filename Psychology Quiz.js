function A2() {
    document.getElementById("AnswerB2").checked = false;
	document.getElementById("AnswerC2").checked = false;
}
function B2() {
    document.getElementById("AnswerA2").checked = false;
	document.getElementById("AnswerC2").checked = false;
}
function C2() {
    document.getElementById("AnswerB2").checked = false;
	document.getElementById("AnswerA2").checked = false;
}
function A4() {
    document.getElementById("AnswerB4").checked = false;
	document.getElementById("AnswerC4").checked = false;
}
function B4() {
    document.getElementById("AnswerA4").checked = false;
	document.getElementById("AnswerC4").checked = false;
}
function C4() {
    document.getElementById("AnswerB4").checked = false;
	document.getElementById("AnswerA4").checked = false;
}
function Check(Questions){
	var Correct = 0;
	
    if (document.getElementById("Answer1").value.toUpperCase() === "AGGRESSION"){
		Correct++;
    } else {
		document.getElementById("AnswerReveal1").innerHTML = "The correct answer was Aggression.";
	}
	
	if (document.getElementById("AnswerA2").checked === true){
		Correct++;
    } else {
		document.getElementById("AnswerReveal2").innerHTML = "The correct answer was Psychoticism.";
	}
	
	if (document.getElementById("Answer3").value.toUpperCase() === "REHABILITATION"){
		Correct++;
	} else {
		document.getElementById("AnswerReveal3").innerHTML = "The correct answer was Rehabilitation.";
	}
	
	if (document.getElementById("AnswerB4").checked === true){
		Correct++;
    } else {
		document.getElementById("AnswerReveal4").innerHTML = "The correct answer was Delinquency.";
	}
	
	if (document.getElementById("Answer5").value.toUpperCase() === "DETERRENT"){
		Correct++;
    } else {
		document.getElementById("AnswerReveal5").innerHTML = "The correct answer was Deterrent.";
	}
	
	document.getElementById("Submit").style.visibility = "hidden";
	document.getElementById("Retry").style.visibility = "visible";
	document.getElementById("Score").innerHTML = "You got " + Correct + " out of " + Questions + "!";
}