//Create an object with all the questions and answers stored

var gameObject = {
    questions: {
        firstQuestion: {
            prompt: "Which of the following is NOT a white wine?",
            correct: "Pinot noir",
            wrong: {
                firstWrong: "Chardonnay",
                secondWrong: "Pinot gris",
                thirdWrong: "Pinot grigio"
            }
        },
        secondQuestion: {
            prompt: "Which spirit must have a grain mash of at least %51 corn?",
            correct: "Bourbon",
            wrong: {
                firstWrong: "Gin",
                secondWrong: "Rye",
                thirdWrong: "Rum"
            }
        },
        thirdQuestion: {
            prompt: "What iconic American city was the Sazerac invented in?",
            correct: "New Orleans",
            wrong: {
                firstWrong: "New York",
                secondWrong: "Seattle",
                thirdWrong: "San Fransisco"
            }
        },
        fourthQuestion: {
            prompt: "The smokey taste in Islay Scotches comes from which smoked grain?",
            correct: "Malted barley",
            wrong: {
                firstWrong: "Rye",
                secondWrong: "Wheat",
                thirdWrong: "Oats"
            }
        }
    }
}

//Create variable to hold timer time
var timeRemaining = 5;

//Create variable to hold score for correct, wrong guesses and ran-out-of-time
var correctGuess = 0;
var wrongGuess = 0;
var runOutOfTime = 0;

//Create variable to hold the current question
var currentQuestion = [
gameObject.questions.firstQuestion, gameObject.questions.secondQuestion, gameObject.questions.thirdQuestion, gameObject.questions.fourthQuestion
];

var timer; 

//Make a function that stops the timer
function stopTimer() {
    clearInterval(timer);
}
 //Set up a function for when a wrong guess has been entered
function incorrectChoice() {
    $("#question").text("not even close")
    $("#image").prepend('<img id="theImg" src="assets/images/bigstock-Senior-Man-With-Cough-2429487" />')
    $(".guessButton").hide();
    stopTimer();
    wrongGuess++;
    $("#scoreCounter").html('Correct: ' + correctGuess + ' ' + 'Wrong: ' + wrongGuess + ' ' + 'Out of time: ' + runOutOfTime);
}

//Set up a function for when the correct guess has been made
function correctChoice() {
    $("#question").text("correct!")
        $("#image").prepend('<img id="theImg" src="assets/images/bigstock-Senior-Man-With-Cough-2429487" />')
        $(".guessButton").hide();
        stopTimer();
        correctGuess++;
        $("#scoreCounter").html('Correct: ' + correctGuess + ' ' + 'Wrong: ' + wrongGuess + ' ' + 'Out of time: ' + runOutOfTime);
}
    
//Set up a function for when the user is out of time
function outOfTime() {
    $("#question").text("Out of time!")
        $("#image").prepend('<img id="theImg" src="assets/images/bigstock-Senior-Man-With-Cough-2429487" />')
        $(".guessButton").hide();
        stopTimer();
        runOutOfTime++;
        $("#scoreCounter").html('Correct: ' + correctGuess + ' ' + 'Wrong: ' + wrongGuess + ' ' + 'Out of time: ' + runOutOfTime);
}

//Make a function that evalutes the time remaining and counts down 
function countdown() {
    if (timeRemaining === 0) {
       outOfTime();
       setTimeout(nextQuestion, 4000)
    } else {
        $("#timer").text(timeRemaining -= 1);
    }
}
    
//Set up a function that displays the next question
function nextQuestion () {
    $("#scoreCounter").hide();
    $("#image").hide();
    $(".guessButton").show();
    timeRemaining = 21;
    setInterval(countdown, 1000);
    setUpNewQuestion(gameObject.questions.secondQuestion);
}

//Display a trivia game screen with a start button
$(document).ready(function () {

    //Hide the players choices
    $("#buttonContainer").hide();

    $("#start").on("click", function () {

        //Hide the start button after it is clicked
        $("#start").hide();
        $("#timer").text(timeRemaining);

        //Set a timer to set the text of the timer element to the value of timeRemaining and decrease the 
        //... time remaining by one for every one second
        timer = setInterval(countdown, 1000);

        //Display the buttons  for the choices you have to make in the game
        $("#buttonContainer").show();

        setUpNewQuestion(gameObject.questions.firstQuestion);

    });
    
    function setUpNewQuestion(selectedQuestion) {
        //Hold value of the question prompt in a variable 
        //Input that into the question element 
        var questionInput = selectedQuestion.prompt;
        $("#question").text(questionInput);

        //Create an array which will hold all possible answer choices
        var choices = [selectedQuestion.correct];
        var x;
        for (x in selectedQuestion.wrong) {
            choices.push(selectedQuestion.wrong[x]);
        }

        //Shuffle the array
        var choicesMixed = choices.sort();
        assignButtonVal(choicesMixed);
    }

    function assignButtonVal(choicesMixed) {
        $("#firstChoice").val(choicesMixed[0])
        $("#secondChoice").val(choicesMixed[1])
        $("#thirdChoice").val(choicesMixed[2])
        $("#fourthChoice").val(choicesMixed[3])
    }

    $(".guessButton").on("click", function () {

        //If the player clicks the wrong option, switch to the incorrect guess screen and then switch to the next question after four seconds
        //---Add one point on to the wrongGuess variable
        if (this.value === currentQuestion[0].correct) {
            correctChoice();
            setTimeout(nextQuestion, 4000)
        //If the player clicks the right option, switch to the correct guess screen and then switch to the next question after four seconds
        //---Add one point on to the correctGuess variable
        } else {
            incorrectChoice();
            console.log(wrongGuess);
            setTimeout(nextQuestion, 4000)
        }
    })

});
