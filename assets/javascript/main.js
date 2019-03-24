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

console.log(gameObject)
console.log(gameObject.questions)
console.log(gameObject.questions[0])
console.log(gameObject.questions.firstQuestion.prompt)
console.log(gameObject.questions.firstQuestion.correct)
console.log(gameObject.questions.firstQuestion.answers)
console.log(gameObject.questions.firstQuestion.wrong)

//Create variable to hold timer time
var timeRemaining = 20;

//Display a trivia game screen with a start button
$(document).ready(function() {
    $("button").on("click", function() {

        //Hide the start button after it is clicked
        $("button").hide();
        $("#timer").text(timeRemaining);
        //Set the text of the timer element to the value of timeRemaining  
        //set a timer to decrease the time remaining by one every second
        setInterval(function(){
            $("#timer").text(timeRemaining -= 1)}, 1000);

        //Hold value of the question prompt in a variable 
        //Input that into the question element 
        var questionInput = gameObject.questions.firstQuestion.prompt;
        $("#question").text(questionInput);
        
        //Create a variable which will hold all possible answer choices
        var choices = gameObject.questions.firstQuestion.correct + ' ';
        var x;
        for(x in gameObject.questions.firstQuestion.wrong) {
            choices += gameObject.questions.firstQuestion.wrong[x] + ' ';
        }

        //Set the text of the choices element to the variable holding all possible choices
        $("#choices").text(choices);

        console.log(choices)
        console.log(timeRemaining);
    });


        

//If the timer runs to zero seconds, switch to the out of time screen and then switch to the next question after four seconds

//If the player clicks the wrong option, switch to the incorrect guess screen and then switch to the next question after four seconds
//---Add the wrong guess to a variable

//If the player clicks the right option, switch to the correct guess screen and then switch to the next question after four seconds
//---Add the right guess to a variable

//After all questions have been run, switch to the end screen
//---Display correct guesses, incorrect guesses and unanswered
//---Have a start over button that starts the game over without refreshing the page

   
});

