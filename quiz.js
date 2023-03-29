function submitQuiz() {
	// Get the form element
	var quizForm = document.getElementById("quiz-form");

	// Get the user's answers
	var q1Answer = quizForm.elements["q1"].value;
	var q2Answer = quizForm.elements["q2"].value;
	var q3Answer = quizForm.elements["q3"].value;
	var q4Answer = quizForm.elements["q4"].value;
	var q5Answer = quizForm.elements["q5"].value;
	
	// Calculate the score
	var score = 0;
	if (q1Answer === "a") {
		score++;
	}
	if (q2Answer === "a") {
		score++;
	}
	if (q3Answer === "b") {
		score++;
	}
	if (q4Answer === "a") {
		score++;
	}
	if (q5Answer === "a") {
		score++;
	}


	// Display the score
	var scoreText = "You scored " + score + " out of 5";
	document.getElementById("score").innerHTML = scoreText;
}
