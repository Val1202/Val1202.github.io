let corrAnsw = 0;
let questionNum = 0;
let timeout = 3000;
var playerName;

// действие при нажатии на кнопку старт
document.querySelector("#startGame").addEventListener("click", function (evt) {
  playerName = prompt("Как вас зовут?", "");
  // if (playerName.indexOf("", 1) > 0) {
  //   var playerMail = prompt("Введите ваш email", "");
  // }
  document.getElementById("mainId").style.visibility = "visible"; // show
  document.getElementById("sidebarLeftId").style.visibility = "visible"; // show
  document.getElementById("sidebarRightId").style.visibility = "visible"; // show
  document.getElementById("startGame").style.visibility = "hidden";
  loadQuestion();
  playMain();
});

document.querySelector("#answer1").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 1) {
    playCorrect();
    document.querySelector("#answer1").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color = "black";
      document.getElementById("wonStep".concat(questionNum - 1)).style.backgroundColor = "#d89100";
      document.querySelector("#answer1").classList.remove("btnAnimationRightAnsw");
    }, timeout);
  } else {
    playWrong();
    document.querySelector("#answer1").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document.querySelector("#answer1").classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, timeout);
  }
});

document.querySelector("#answer2").addEventListener("click", function (evt) {
  document.querySelector("#answer1").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 2) {
    playCorrect();
    document.querySelector("#answer2").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color = "black";
      document.getElementById("wonStep".concat(questionNum - 1)).style.backgroundColor = "#d89100";
      document.querySelector("#answer2").classList.remove("btnAnimationRightAnsw");
    }, timeout);
  } else {
    playWrong();
    document.querySelector("#answer2").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document.querySelector("#answer2").classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, timeout);
  }
});

document.querySelector("#answer3").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer1").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 3) {
    playCorrect();
    document.querySelector("#answer3").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color = "black";
      document.getElementById("wonStep".concat(questionNum - 1)).style.backgroundColor = "#d89100";
      document.querySelector("#answer3").classList.remove("btnAnimationRightAnsw");
    }, timeout);
  } else {
    playWrong();
    document.querySelector("#answer3").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document.querySelector("#answer3").classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, timeout);
  }
});

document.querySelector("#answer4").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer1").disabled = true;
  if (corrAnsw == 4) {
    playCorrect();
    document.querySelector("#answer4").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color = "black";
      document.getElementById("wonStep".concat(questionNum - 1)).style.backgroundColor = "#d89100";
      document.querySelector("#answer4").classList.remove("btnAnimationRightAnsw");
    }, timeout);
  } else {
    playWrong();
    document.querySelector("#answer4").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document.querySelector("#answer4").classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, timeout);
  }
});

//Загрузка вопроса
function loadQuestion() {
  let quest = document.getElementById("quest_chng");
  let span = document.getElementById("span1_chng");
  let span1 = document.getElementById("span2_chng");
  let span2 = document.getElementById("span3_chng");
  let span3 = document.getElementById("span4_chng");

  if (questionNum == 15) {
    sendEmail();
    openPopup();
    return;
  }

  //--- from JSON file
  var request = new XMLHttpRequest();
  request.open("GET", "data.json", false);
  request.send(null);
  var mydata = JSON.parse(request.responseText);
  //---
  // Download question
  quest.textContent = decodeURIComponent(escape(mydata[questionNum].question));
  // Download answers
  span.textContent = decodeURIComponent(escape(mydata[questionNum].answ1));
  span1.textContent = decodeURIComponent(escape(mydata[questionNum].answ2));
  span2.textContent = decodeURIComponent(escape(mydata[questionNum].answ3));
  span3.textContent = decodeURIComponent(escape(mydata[questionNum].answ4));

  corrAnsw = parseInt(decodeURIComponent(escape(mydata[questionNum].correct_answ)));

  questionNum++;

  document.querySelector("#answer1").disabled = false;
  document.querySelector("#answer2").disabled = false;
  document.querySelector("#answer3").disabled = false;
  document.querySelector("#answer4").disabled = false;
}

function confirmRefresh() {
  var okToRefresh = confirm("You are losing this game " + playerName + " !. Do you want to try again?");
  if (okToRefresh) {
    corrAnsw = 0;
    questionNum = 0;

    for (let i = 1; i < 16; i++) {
      document.getElementById("wonStep".concat(i)).style.color = "#d89100";
      document.getElementById("wonStep".concat(i)).style.backgroundColor = "";
    }

    loadQuestion();
  } else {
    setTimeout("location.reload(true);", 100);
  }
}

function playCorrect() {
  var audio = document.getElementById("audioCorAnsw");
  audio.play();
}

function playWrong() {
  var audio = document.getElementById("audioWrngAnsw");
  audio.play();
}

function playMain() {
  var audio = document.getElementById("audioMain");
  audio.play();
}

//открытие окна если победа.
//const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

function openPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
}

// Initialize EmailJS with your User ID
emailjs.init("SWFY1cn2IEaBoZ_sZ"); // Replace 'YOUR_USER_ID' with your EmailJS User ID

// Function to send an email
function sendEmail() {
  // Define the email parameters
  const templateParams = {
    from_name: "Anastasia ",
    to_name: "Valerii",
    message: "Anastasia win !",
  };

  // Send the email using EmailJS emailjs.send("service_nif2bh6","template_3an1p9f");
  emailjs.send("service_nif2bh6", "template_3an1p9f", templateParams).then;
}
