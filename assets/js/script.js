var quizObject = [];

var questionTextEl = document.querySelector("#question-text");
var questionChoicesEl = document.querySelector("#question-choices");
var questionAnswersEl = document.querySelector("#prev-question-answer");
function initData() {
    //show only start page
    resetQuestionElements();

    quizObject = [];

    quizObject.push({
        "id": 0,
        "question": "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds ?",
        "choices": [{
            "text": "setInterval(myTimer, 3)",
            "is_correct": false

        },
        {
            "text": "setInterval(myTimer, 30)",
            "is_correct": false

        },
        {
            "text": "setInterval(myTimer, 300)",
            "is_correct": false

        },
        {
            "text": "setInterval(myTimer, 3000)",
            "is_correct": true

        },

        ],
        "answer": "",


    },
        {
            "id": 1,
            "question": "SECOND Q",
            "choices": [{
                "text": "setInterval(myTimer, 3)",
                "is_correct": false

            },
            {
                "text": "setInterval(myTimer, 30)",
                "is_correct": false

            },
            {
                "text": "setInterval(myTimer, 300)",
                "is_correct": false

            },
            {
                "text": "setInterval(myTimer, 3000)",
                "is_correct": true

            }],
            "answer": "",


        });

    console.log("questiions are ready. Quiz reset !");


}

function startQuiz() {

    initData();
    setQuestion(0);


}


function setQuestion(question_id) {
    //close start page here with display none
    resetQuestionElements();


    for (i = 0; i < (quizObject).length; i++) {
        if (quizObject[i].id == question_id) {
            questionTextEl.append(quizObject[i].question);
            questionTextEl.setAttribute('data-question-id', quizObject[i].id);

            for (j = 0; j < (quizObject[i].choices).length; j++) {

                var list = document.createElement("button");
                var textnode = document.createTextNode(quizObject[i].choices[j].text);
                list.setAttribute('data-choice-id', j);
                list.setAttribute('onclick', "getAnswer(" + quizObject[i].id + "," + j + ")");
                list.appendChild(textnode);
                questionChoicesEl.appendChild(list);


            }

        }

    }


}

function resetQuestionElements() {
    questionChoicesEl.innerHTML = "";
    questionTextEl.innerHTML = "";

}

function getAnswer(question_id, choice_id) {

    questionAnswersEl.innerHTML = "";

    var next_question_id = question_id + 1;

    if (quizObject[question_id].choices[choice_id].is_correct == true) {
        quizObject[question_id].answer = "Correct!";
    } else {
        quizObject[question_id].answer = "Wrong !";
    }



    setQuestion(next_question_id);

    questionAnswersEl.append(quizObject[question_id].answer);
}