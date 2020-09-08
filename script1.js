//Quiz Prompt
var newH1 = document.createElement("h1");
newH1.textContent ="Code Quiz";
document.body.appendChild(newH1);
newH1.style = "text-align: center"

var newH2 = document.createElement("h2");
newH2.textContent= "Answer the following Javascript questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds! Good luck!";
document.body.appendChild(newH2);
newH2.style = "text-align: center"

var button = document.createElement("button");
button.innerHTML ="Start Quiz";
document.body.appendChild(button)

button.addEventListener ("click", function(){
    alert ("did something");
})
console.log(button)


// Quiz Questions
// var choiceA= 
// var choiceB=
// var choiceC=
// var answer=
// var questions = [
//     {
//         question: "What is Javascript?"
//     choiceA: "A programming Language"
//     choiceB: ""
//     choiceC: ""
//     answer: ""
//     },
//     {
//         question: ""
//     choiceA: ""
//     choiceB: ""
//     choiceC: ""
//     answer: ""
//     },
//     {
//         question: ""
//     choiceA: ""
//     choiceB: ""
//     choiceC: ""
//     answer:
// },
//     {
//         question: ""
//     choiceA: ""
//     choiceB: ""
//     choiceC: ""
//     answer: ""
//     },
//     {
//         question: ""
//     choiceA: ""
//     choiceB: ""
//     choiceC: ""
//     answer: ""
//     }
// ]

//Timer
var secondsLeft = 50
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
timerInterval.textContent = secondsLeft
    })
    if (secondsLeft == 0) {
        clearInterval();
    }
}