//// variables

var correcAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0; // decrement everytime above 2 variables are incremented
var questionCount = 0;

var timer = 16;
var intervalId;
var isSelectionActive = true;

// var  quesDiv= "<p>How many planets are there in solar system?</p><br><button class=\"options\" id=\"1\" val=\"1\">Three</button><br><button class=\"options\" id=\"2\" val=\"2\">Nine</button><br><button class=\"options\" id=\"3\" val=\"3\">Eight</button><br><button class=\"options\" id=\"4\" val=\"4\">Twenty</button>"


// object to hold questions

var questions = [
    {
        quesDiv: "<h1>Question 1</h1><p>How many planets are there in our solar system?</p><button class=\"options\" id=\"1\" val=\"1\">Three</button><br><button class=\"options\" id=\"2\" val=\"2\">Nine</button><br><button class=\"options\" id=\"3\" val=\"3\">Eight</button><br><button class=\"options\" id=\"4\" val=\"4\">Twenty</button>",
        ans: 3,
        url: "<img src=\"./assets/images/q1.gif\"  height=\"120\" width=\"120\"><br>Eight"
    },

    {
        quesDiv: "<h1>Question 2</h1><p>What is the largest planet in our solar system?</p><button class=\"options\" id=\"1\" val=\"1\">Earth</button><br><button class=\"options\" id=\"2\" val=\"2\">Jupiter</button><br><button class=\"options\" id=\"3\" val=\"3\">Neptune</button><br><button class=\"options\" id=\"4\" val=\"4\">Mars</button>",
        ans: 2,
        url: "<img src=\"./assets/images/q2.gif\"  height=\"120\" width=\"120\"><br>Jupiter"
    },

    {
        quesDiv: "<h1>Question 3</h1><p>Who was the first human to travel into space?</p><button class=\"options\" id=\"1\" val=\"1\">Neil Armstrong</button><br><button class=\"options\" id=\"2\" val=\"2\">Felix Baumgartner</button><br><button class=\"options\" id=\"3\" val=\"3\">Lance Armstrong</button><br><button class=\"options\" id=\"4\" val=\"4\">Yuri Gagarin</button>",
        ans: 4,
        url: "<img src=\"./assets/images/q3.gif\"  height=\"120\" width=\"120\"><br>Yuri Gagarin"
    },

    {
        quesDiv: "<h1>Question 4</h1><p>What is closest galaxy to Milky Way?</p><button class=\"options\" id=\"1\" val=\"1\">Andromeda</button><br><button class=\"options\" id=\"2\" val=\"2\">Sagittarius A</button><br><button class=\"options\" id=\"3\" val=\"3\">NGC 3923</button><br><button class=\"options\" id=\"4\" val=\"4\">Alpha Centauri</button>",
        ans: 1,
        url: "<img src=\"./assets/images/q4.gif\"  height=\"120\" width=\"120\"><br>Andromeda"
    },

    {
        quesDiv: "<h1>Question 5</h1><p>Which one is a satellite of Mars?</p><button class=\"options\" id=\"1\" val=\"1\">Krypton</button><br><button class=\"options\" id=\"2\" val=\"2\">Phobos</button><br><button class=\"options\" id=\"3\" val=\"3\">Ceres</button><br><button class=\"options\" id=\"4\" val=\"4\">Xerxes</button>",
        ans: 2,
        url: "<img src=\"./assets/images/q5.gif\"  height=\"120\" width=\"120\"><br>Phobos"
    },

    {
        quesDiv: "<h1>Question 6</h1><p>What shape is the Milky Way?</p><button class=\"options\" id=\"1\" val=\"1\">Square</button><br><button class=\"options\" id=\"2\" val=\"2\">Spherical</button><br><button class=\"options\" id=\"3\" val=\"3\">Spiral</button><br><button class=\"options\" id=\"4\" val=\"4\">Elliptical</button>",
        ans: 3,
        url: "<img src=\"./assets/images/q6.gif\"  height=\"120\" width=\"120\"><br>Spiral"
    },

    {
        quesDiv: "<h1>Question 7</h1><p>What was the first artificial satellite?</p><button class=\"options\" id=\"1\" val=\"1\">Challenger</button><br><button class=\"options\" id=\"2\" val=\"2\">Sputnik 1</button><br><button class=\"options\" id=\"3\" val=\"3\">Vangaurd 1</button><br><button class=\"options\" id=\"4\" val=\"4\">Skylab</button>",
        ans: 2,
        url: "<img src=\"./assets/images/q7.gif\"  height=\"120\" width=\"120\"><br>Sputnik 1"
    },

    {
        quesDiv: "<h1>Question 8</h1><p>Who was the first human to set foot on moon?</p><button class=\"options\" id=\"1\" val=\"1\">Neil Armstrong</button><br><button class=\"options\" id=\"2\" val=\"2\">Matt Damon</button><br><button class=\"options\" id=\"3\" val=\"3\">Lance Armstrong</button><br><button class=\"options\" id=\"4\" val=\"4\">Kalpana Chawla</button>",
        ans: 1,
        url: "<img src=\"./assets/images/q8.gif\"  height=\"120\" width=\"120\"><br>Neil Armstrong"
    },

    {
        quesDiv: "<h1>Question 9</h1><p>Which planet in our solar system has largest number of moons?</p><button class=\"options\" id=\"1\" val=\"1\">Earth</button><br><button class=\"options\" id=\"2\" val=\"2\">Mercury</button><br><button class=\"options\" id=\"3\" val=\"3\">Saturn</button><br><button class=\"options\" id=\"4\" val=\"4\">Jupiter</button>",
        ans: 4,
        url: "<img src=\"./assets/images/q9.gif\"  height=\"120\" width=\"120\"><br>Jupiter"
    },

    {
        quesDiv: "<h1>Question 10</h1><p>Which one is a region of spacetime from which nothing can escape?</p><button class=\"options\" id=\"1\" val=\"1\">Quasar</button><br><button class=\"options\" id=\"2\" val=\"2\">Black Hole</button><br><button class=\"options\" id=\"3\" val=\"3\">Nebula</button><br><button class=\"options\" id=\"4\" val=\"4\">Pulsar</button>",
        ans: 2,
        url: "<img src=\"./assets/images/q10.gif\"  height=\"120\" width=\"120\"><br>Black Hole"
    }
];


//// events
// click start button
$(document).on("click", "#start", function () {
    initGame();
    $("#question").empty();
    runTimer();
    $("#question").append(questions[questionCount].quesDiv);    

    // console.log(questions[questionCount].quesDiv);
    questionCount++;

});

// click next button
$(document).on("click", ".options", function () {

    resetTimer();
    

    var selectedOption = $(this).attr("val");
    var currentAnswer = questions[questionCount - 1].ans;
    console.log(selectedOption);
    console.log(currentAnswer);


   ////////////// //questionCount < 3
    if ((parseInt(selectedOption) == parseInt(currentAnswer)) && isSelectionActive) {
        isSelectionActive = false;
        correcAnswer++;
        $("#correct-message").html("<h2>Correct Answer!</h2>"+questions[questionCount - 1].url);
        setTimeout(nextQuestion,2000);
        }
    else if ((parseInt(selectedOption) != parseInt(currentAnswer)) && isSelectionActive) {
        isSelectionActive = false;
        wrongAnswer++;
        $("#wrong-message").html("<h2>Wrong! Correct answer is </h2>"+questions[questionCount - 1].url);
        setTimeout(nextQuestion,2000);
        }

    // nextQuestion();
});


//// functions

// function to initialize game
function initGame() {
    correcAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    questionCount = 0;
    timer = 16;
    $("#correct").html("");
    $("#wrong").html("");
    $("#unanswered").html("");
}



// function to display next question
function nextQuestion() {
    $("#correct-message").html("");
    $("#wrong-message").html("");
    $("#question").empty();
    isSelectionActive = true;

    if (questionCount < 10) {
        runTimer();
        $("#question").append(questions[questionCount].quesDiv);
        // console.log(questions[questionCount].quesDiv);
        
        questionCount++;
    }
    else {
        finish();
    }
}



// function to finish the game
function finish() {
    $("#time-left").html("<h2></h2>");
    resetTimer();
    $("#question").empty();    
    $("#question").append("<button id=\"start\">Restart</button>");
    $("#correct").html("<b>Correct Answers : " + correcAnswer + " </b>");
    $("#wrong").html("<b>Wrong Answers : " + wrongAnswer + " </b>");
    $("#unanswered").html("<b>Unanswered : " + unanswered + " </b>");
}



// function to start interval

function runTimer() {
    intervalId = setInterval(decrementTimer, 1000);
  }

function decrementTimer() {
    timer--;
    $("#time-left").html("<h2>Time Remaining : " + timer + "</h2>");
    if (timer === 0) {
        unanswered++;
        resetTimer();
        $("#wrong-message").html("<h2>Correct answer is </h2>"+questions[questionCount - 1].url);
        setTimeout(nextQuestion,2000);
        // nextQuestion();
      // alert("Time Up!");
    }
  }

  function resetTimer() {
    clearInterval(intervalId);
    timer = 16;
    // alert("Time Up!");
  }