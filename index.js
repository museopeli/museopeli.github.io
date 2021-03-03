// Main javascript file for core functionality

// Variable declarations
var correctAnswer = 100; // answer for question
var number = 100; // las question holder
var score = 0; // Score
var usedQuestions = [];

function startGame() {
  document.getElementById("mainpage").style.display = "none";
  document.getElementById('end').style.display = "none";
  nextQuestion();
}
function endGame() {
  document.getElementById('objectTitle').innerHTML = "Hienoa!";
  document.getElementById('infoimage').style.display = "none";
  document.getElementById('objectText').innerHTML = "Löysit kaikki esineet. Sait "+score+" pistettä.";
  document.getElementById('nextquestion').style.display = "none";
  document.getElementById('end').style.display = "block";
  console.log("game ended");
}

function nextQuestion() {

  if (usedQuestions.length >= 11) {
    endGame();
  }
  else {
    document.getElementById('infopage').style.display = "none";
    //var lastNumber = number;

    number = Math.floor(Math.random() * 11);
    if (usedQuestions.includes(number)) {
      nextQuestion();
      console.log('same question: randomize new');
    }
    if (typeof data[number].question !== "undefined") {
      document.getElementById('question').innerHTML = data[number].question;
      correctAnswer = data[number].answer;

    }
    else {
      console.log("error: there is no question " + number);
    }
  }
}

function answer(givenAnswer){
  if (givenAnswer === correctAnswer) {
    //alert("wuhuu");
    //nextQuestion();
    info();
    score += 100;
    document.getElementById('score').innerHTML = score + "p";
  }
  else {
    score -= 100;
    document.getElementById('score').innerHTML = score + "p";
    document.getElementById(givenAnswer).style.backgroundColor = "#FF0000";
    document.getElementById(givenAnswer).style.opacity = "0.5";
    setTimeout(function(){
      document.getElementById(givenAnswer).style.backgroundColor = "";
      document.getElementById(givenAnswer).style.opacity = "1";
    }, 1000);
  }
}

function info() {
  console.log(number+1);
  usedQuestions.push(number);
  console.log(usedQuestions);
  document.getElementById('rewardpage').style.display = "block";
  document.getElementById("infoimage").src = "images/" + number + ".jpg";
  document.getElementById('objectTitle').innerHTML = data[number].object;
  document.getElementById('objectText').innerHTML = data[number].info;
  //document.getElementById('infoimage').src = "images/1.jpg";
  setTimeout(function(){
    document.getElementById('rewardpage').style.display = "none";
    document.getElementById('infopage').style.display = "block";
  }, 1000);
}

function slide() {
  document.getElementById('topslide').classList.toggle('hideTop');
  document.getElementById('bottomslide').classList.toggle('hideBottom');
}
