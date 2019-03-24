//Create an object of possible questions and answers

var questionObj = {
    questions: {
        first: {
            question: "Which spirit is fermented from a mash containing at least 51% corn?",
            answers: {
                correct: "Bourbon",
                wrong: { 
                    firstWrong: "Vodka",
                    secondWrong: "Rum",
                    thirdWrong: "Rye"
            }
        },   
        second: {
            question: "Of the following wines, which one is NOT white?",
            answers: {
                correct: "Pinot noir",
                wrong: {
                    firstWrong: "Pinot gris",
                    secondWrong: "Pinot grigio",
                    thirdWrong: "Sauvignon blanc"
            }
        },   
        third: {
            question: "The Sazerac was invented in which American city?",
            answers: {
                correct: "New Orleans",
                wrong: {
                    firstWrong: "New York",
                    secondWrong: "Seattle",
                    thirdWrong: "San Fransisco"
            }
        },   
        fourth: {
            question: "How are martinis traditonally chilled?",
            answers: {
                correct: "Stirred",
                wrong : {
                    firstWrong: "Shaken",
                    secondWrong: "Either shaken or stirred",
                    thirdWrong: "Their was no traditional method"
            }
        }  
    } 
}

//display a trivia game screen with a start button

//on clicking the start button, display a question with four guess buttons
//set a timer to run starting at 20 seconds

//If the timer runs to zero seconds, switch to the out of time screen and then switch to the next question after four seconds

//If the player clicks the wrong option, switch to the incorrect guess screen and then switch to the next question after four seconds
//---Add the wrong guess to a variable

//If the player clicks the right option, switch to the correct guess screen and then switch to the next question after four seconds
//---Add the right guess to a variable

//After all questions have been run, switch to the end screen
//---Display correct guesses, incorrect guesses and unanswered
//---Have a start over button that starts the game over without refreshing the page
