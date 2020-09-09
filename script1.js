
//Quiz Prompt
var quizContainer = document.createElement("div")
document.body.append(quizContainer)
console.log(quizContainer)

var newH1 = document.createElement("h1");
newH1.textContent = "Code Quiz";
quizContainer.appendChild(newH1);
newH1.style = "text-align: center";
console.log(newH1)

var newH2 = document.createElement("h2");
newH2.textContent = "Answer the following Javascript questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
quizContainer.appendChild(newH2);
newH2.style = "text-align: center";
console.log(newH2)

//start button container
var buttonContainer = document.createElement("div")
quizContainer.append(buttonContainer)

//start button
var button = document.createElement("button");
button.innerHTML = "Start Quiz";
buttonContainer.appendChild(button);
buttonContainer.setAttribute("style", "text-align:center; margin 0 auto;");

button.addEventListener("click", function () {
    alert("Good luck");

})

// //if (startButtonClicked) {
//     displayQuestion()
//     startTimer()
// }


// var timer = 60;
// var questions = [
// {
//     questionTitle: "Inside which HTML element do we put the JavaScript?"
//     choice1:"<js>"
//     choice2:"<scripting>"
//     choice3:"<script>"
//     choice4:"<javascript>"

// }, 
// {

//     questionTitle: "wWhich of the following is not a valid JavaScript variable name?"
//     choice1:"2names"
//     choice2:"_first_and_last_names"
//     choice3:"FirstAndLast"
//     choice4:"None of the above"
// }, 
// {

//     questionTitle: "What is the correct JAvaScript syntax to write 'Hello World'?"
//     choice1:"System.out.printIn('Hello World')"
//     choice2:"printIn('Hello World')"
//     choice3:"document.write('Hello World')"
//     choice4:"response.write('Hello World')"
// }, 
// {
//     questionTitle: "Which is not a primitive data type in JavaScript?"
//     choice1:"boolean"
//     choice2:"number"
//     choice3:"string"
//     choice4:"character"
// }, 
// {
//     questionTitle: "Which of these is not a logical operator?"
//     choice1:"!"
//     choice2:"&"
//     choice3:"&&"
//     choice4:"||"
// }

// ]

// var correctAnswers = ["choice3", "choice1", "choice3", "choice4", "choice2"]

// //Timer
// var secondsLeft = 50
// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
// timerInterval.textContent = secondsLeft
//     })
//     if (secondsLeft == 0) {
//         clearInterval();
//     }
// }

