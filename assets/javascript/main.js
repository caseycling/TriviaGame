//Create an object with all the questions and answers stored

var gameObject = {
    questions: {
        firstQuestion: {
            prompt: "Which of the following is NOT a white wine?",
            answers: {
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
            answers: {
                correct: "Bourbon",
                wrong: {
                    firstWrong: "Gin",
                    secondWrong: "Rye",
                    thirdWrong: "Rum"
                }   
            }
        },  
        thirdQuestion: {
            prompt: "What iconic American city was the Sazerac invented in?",
            answers: {
                correct: "New Orleans",
                wrong: {
                    firstWrong: "New York",
                    secondWrong: "Seattle",
                    thirdWrong: "San Fransisco"
                }
            }
        },  
        fourthQuestion: { 
            prompt: "The smokey taste in Islay Scotches comes from which smoked grain?",
            answers: {
                correct: "Malted barley",
                wrong: {
                    firstWrong: "Rye",
                    secondWrong: "Wheat",
                    thirdWrong: "Oats"
                }
            }
        }  
    }
}
console.log(gameObject)
console.log(gameObject.questions)
console.log(gameObject.questions[0])
console.log(gameObject.questions.firstQuestion.prompt)
console.log(gameObject.questions.firstQuestion.answers.correct)

//Display a trivia game screen with a start button
//On clicking the start button, display a question with four guess buttons

$(document).ready(function() {
    $("button").on("click", function() {
        $("button").hide();
        var questionInput = gameObject.questions.firstQuestion.prompt;
        $('#question').html(questionInput);

    });


        //set a timer to run starting at 20 seconds

//If the timer runs to zero seconds, switch to the out of time screen and then switch to the next question after four seconds

//If the player clicks the wrong option, switch to the incorrect guess screen and then switch to the next question after four seconds
//---Add the wrong guess to a variable

//If the player clicks the right option, switch to the correct guess screen and then switch to the next question after four seconds
//---Add the right guess to a variable

//After all questions have been run, switch to the end screen
//---Display correct guesses, incorrect guesses and unanswered
//---Have a start over button that starts the game over without refreshing the page

   
});

