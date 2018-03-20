//// variables

var correcAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0; // decrement everytime above 2 variables are incremented
var questionCount = 0;

var timer = 11;
var intervalId;

// var  quesDiv= "<p>How many planets are there in solar system?</p><br><button class=\"options\" id=\"1\" val=\"1\">Three</button><br><button class=\"options\" id=\"2\" val=\"2\">Nine</button><br><button class=\"options\" id=\"3\" val=\"3\">Eight</button><br><button class=\"options\" id=\"4\" val=\"4\">Twenty</button>"


// object to hold questions

var questions = [
    {
        quesDiv: "<h1>Question 1</h1><p>How many planets are there in our solar system?</p><br><button class=\"options\" id=\"1\" val=\"1\">Three</button><br><button class=\"options\" id=\"2\" val=\"2\">Nine</button><br><button class=\"options\" id=\"3\" val=\"3\">Eight</button><br><button class=\"options\" id=\"4\" val=\"4\">Twenty</button>",
        ans: 3
    },

    {
        quesDiv: "<h1>Question 2</h1><p>What is the largest planet in our solar system?</p><br><button class=\"options\" id=\"1\" val=\"1\">Earth</button><br><button class=\"options\" id=\"2\" val=\"2\">Jupiter</button><br><button class=\"options\" id=\"3\" val=\"3\">Neptune</button><br><button class=\"options\" id=\"4\" val=\"4\">Mars</button>",
        ans: 2
    },

    {
        quesDiv: "<h1>Question 3</h1><p>Who was the first human to travel into space?</p><br><button class=\"options\" id=\"1\" val=\"1\">Neil Armstrong</button><br><button class=\"options\" id=\"2\" val=\"2\">Felix Baumgartner</button><br><button class=\"options\" id=\"3\" val=\"3\">Lance Armstrong</button><br><button class=\"options\" id=\"4\" val=\"4\">Yuri Gagarin</button>",
        ans: 4
    },

    {
        quesDiv: "<h1>Question 4</h1><p>What is closest galaxy to Milky Way?</p><br><button class=\"options\" id=\"1\" val=\"1\">Andromeda</button><br><button class=\"options\" id=\"2\" val=\"2\">Sagittarius A</button><br><button class=\"options\" id=\"3\" val=\"3\">NGC 3923</button><br><button class=\"options\" id=\"4\" val=\"4\">Alpha Centauri</button>",
        ans: 1
    },

    {
        quesDiv: "<h1>Question 5</h1><p>Which one is a satellite of Mars?</p><br><button class=\"options\" id=\"1\" val=\"1\">Krypton</button><br><button class=\"options\" id=\"2\" val=\"2\">Phobos</button><br><button class=\"options\" id=\"3\" val=\"3\">Ceres</button><br><button class=\"options\" id=\"4\" val=\"4\">Xerxes</button>",
        ans: 2
    },

    {
        quesDiv: "<h1>Question 6</h1><p>What shape is the Milky Way?</p><br><button class=\"options\" id=\"1\" val=\"1\">Square</button><br><button class=\"options\" id=\"2\" val=\"2\">Spherical</button><br><button class=\"options\" id=\"3\" val=\"3\">Spiral</button><br><button class=\"options\" id=\"4\" val=\"4\">Elliptical</button>",
        ans: 3
    },

    {
        quesDiv: "<h1>Question 7</h1><p>What was the first artificial satellite?</p><br><button class=\"options\" id=\"1\" val=\"1\">Challenger</button><br><button class=\"options\" id=\"2\" val=\"2\">Sputnik 1</button><br><button class=\"options\" id=\"3\" val=\"3\">Vangaurd 1</button><br><button class=\"options\" id=\"4\" val=\"4\">Skylab</button>",
        ans: 2
    },

    {
        quesDiv: "<h1>Question 8</h1><p>Who was the first human to set foot on moon?</p><br><button class=\"options\" id=\"1\" val=\"1\">Neil Armstrong</button><br><button class=\"options\" id=\"2\" val=\"2\">Matt Damon</button><br><button class=\"options\" id=\"3\" val=\"3\">Lance Armstrong</button><br><button class=\"options\" id=\"4\" val=\"4\">Kalpana Chawla</button>",
        ans: 1
    },

    {
        quesDiv: "<h1>Question 9</h1><p>Which planet in our solar system has largest number of moons?</p><br><button class=\"options\" id=\"1\" val=\"1\">Earth</button><br><button class=\"options\" id=\"2\" val=\"2\">Mercury</button><br><button class=\"options\" id=\"3\" val=\"3\">Saturn</button><br><button class=\"options\" id=\"4\" val=\"4\">Jupiter</button>",
        ans: 4
    },

    {
        quesDiv: "<h1>Question 10</h1><p>What do you call a region of space-time from which nothing can escape including light?</p><br><button class=\"options\" id=\"1\" val=\"1\">Quasar</button><br><button class=\"options\" id=\"2\" val=\"2\">Black Hole</button><br><button class=\"options\" id=\"3\" val=\"3\">Nebula</button><br><button class=\"options\" id=\"4\" val=\"4\">Pulsar</button>",
        ans: 2
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
    if (parseInt(selectedOption) == parseInt(currentAnswer)) {
        correcAnswer++;
        $("#correct-message").html("<h1>Correct Answer!</h1>");
        setTimeout(nextQuestion,2000);
        }
    else {
        wrongAnswer++;
        $("#wrong-message").html("<h1>Wrong Answer</h1>");
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
    timer = 11;
    $("#correct").html("");
    $("#wrong").html("");
    $("#unanswered").html("");
}



// function to display next question
function nextQuestion() {
    $("#correct-message").html("");
    $("#wrong-message").html("");
    $("#question").empty();

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
        nextQuestion();
      // alert("Time Up!");
    }
  }

  function resetTimer() {
    clearInterval(intervalId);
    timer = 11;
    // alert("Time Up!");
  }