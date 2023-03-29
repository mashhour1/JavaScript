function submitQuiz() {
	// Get the form element
	var quizForm = document.getElementById("quiz-form");

	// Get the user's answers
	var q1Answer = quizForm.elements["q1"].value;
	var q2Answer = quizForm.elements["q2"].value;

	// Calculate the score
	var score = 0;
	if (q1Answer === "a") {
		score++;
	}
	if (q2Answer === "a") {
		score++;
	}

	// Display the score
	var scoreText = "You scored " + score + " out of 2";
	document.getElementById("score").innerHTML = scoreText;
}
