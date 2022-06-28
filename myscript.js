let corrAnsw = 0;
let questionNum = 0;

// действие при нажатии на кнопку старт
document.querySelector("#startGame").addEventListener("click", function (evt) {
  var playerName = prompt("Как вас зовут?", "");
  if (playerName.indexOf("", 1) > 0) {
    var playerMail = prompt("Введите ваш email", "");
  }
  document.getElementById("mainId").style.visibility = "visible"; // show
  document.getElementById("sidebarLeftId").style.visibility = "visible"; // show
  document.getElementById("sidebarRightId").style.visibility = "visible"; // show
  document.getElementById("startGame").style.visibility = "hidden";
  loadQuestion();
});

document.querySelector("#answer1").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 1) {
    document.querySelector("#answer1").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color =
        "black";
      document.getElementById(
        "wonStep".concat(questionNum - 1)
      ).style.backgroundColor = "#d89100";
      document
        .querySelector("#answer1")
        .classList.remove("btnAnimationRightAnsw");
    }, 2000);
  } else {
    document.querySelector("#answer1").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document
        .querySelector("#answer1")
        .classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, 2000);
  }
});

document.querySelector("#answer2").addEventListener("click", function (evt) {
  document.querySelector("#answer1").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 2) {
    document.querySelector("#answer2").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color =
        "black";
      document.getElementById(
        "wonStep".concat(questionNum - 1)
      ).style.backgroundColor = "#d89100";
      document
        .querySelector("#answer2")
        .classList.remove("btnAnimationRightAnsw");
    }, 2000);
  } else {
    document.querySelector("#answer2").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document
        .querySelector("#answer2")
        .classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, 2000);
  }
});

document.querySelector("#answer3").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer1").disabled = true;
  document.querySelector("#answer4").disabled = true;
  if (corrAnsw == 3) {
    document.querySelector("#answer3").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color =
        "black";
      document.getElementById(
        "wonStep".concat(questionNum - 1)
      ).style.backgroundColor = "#d89100";
      document
        .querySelector("#answer3")
        .classList.remove("btnAnimationRightAnsw");
    }, 2000);
  } else {
    document.querySelector("#answer3").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document
        .querySelector("#answer3")
        .classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, 2000);
  }
});

document.querySelector("#answer4").addEventListener("click", function (evt) {
  document.querySelector("#answer2").disabled = true;
  document.querySelector("#answer3").disabled = true;
  document.querySelector("#answer1").disabled = true;
  if (corrAnsw == 4) {
    document.querySelector("#answer4").classList.add("btnAnimationRightAnsw");
    setTimeout(function () {
      loadQuestion();
      document.getElementById("wonStep".concat(questionNum - 1)).style.color =
        "black";
      document.getElementById(
        "wonStep".concat(questionNum - 1)
      ).style.backgroundColor = "#d89100";
      document
        .querySelector("#answer4")
        .classList.remove("btnAnimationRightAnsw");
    }, 2000);
  } else {
    document.querySelector("#answer4").classList.add("btnAnimationWrongAnsw");
    setTimeout(function () {
      document
        .querySelector("#answer4")
        .classList.remove("btnAnimationWrongAnsw");
      confirmRefresh();
    }, 2000);
  }
});

//Загрузка вопроса
function loadQuestion() {
  let quest = document.getElementById("quest_chng");
  let span = document.getElementById("span1_chng");
  let span1 = document.getElementById("span2_chng");
  let span2 = document.getElementById("span3_chng");
  let span3 = document.getElementById("span4_chng");
  //--- from JSON file
  var request = new XMLHttpRequest();
  request.open("GET", "data.json", false);
  request.send(null);
  var mydata = JSON.parse(request.responseText);
  //---
  // Download question
  quest.textContent = decodeURIComponent(
    escape(window.atob(mydata[questionNum].question))
  );
  // Download answers
  span.textContent = decodeURIComponent(
    escape(window.atob(mydata[questionNum].answ1))
  );
  span1.textContent = decodeURIComponent(
    escape(window.atob(mydata[questionNum].answ2))
  );
  span2.textContent = decodeURIComponent(
    escape(window.atob(mydata[questionNum].answ3))
  );
  span3.textContent = decodeURIComponent(
    escape(window.atob(mydata[questionNum].answ4))
  );

  corrAnsw = parseInt(
    decodeURIComponent(escape(window.atob(mydata[questionNum].correct_answ)))
  );

  questionNum++;

  document.querySelector("#answer1").disabled = false;
  document.querySelector("#answer2").disabled = false;
  document.querySelector("#answer3").disabled = false;
  document.querySelector("#answer4").disabled = false;
}

function confirmRefresh() {
  var okToRefresh = confirm("You are loser. Do you really want to try again?");
  if (okToRefresh) {
    corrAnsw = 0;
    questionNum = 0;

    for (let i = 1; i < 15; i++) {
      document.getElementById("wonStep".concat(i)).style.color = "#d89100";
      document.getElementById("wonStep".concat(i)).style.backgroundColor = "";
    }

    loadQuestion();
  } else {
    setTimeout("location.reload(true);", 100);
  }
}
