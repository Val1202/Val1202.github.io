let corrAnsw;
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
  loadQuestion(questionNum);
});

document.querySelector("#answer1").addEventListener("click", function (evt) {
  if (corrAnsw == 1) {
    document.getElementById("wonStep1").style.color = "black";
    document.getElementById("wonStep1").style.backgroundColor = "#d89100";
    questionNum++;
    loadQuestion(questionNum);
  }
});

document.querySelector("#answer2").addEventListener("click", function (evt) {
  if (corrAnsw == 2) {
    document.getElementById("wonStep2").style.color = "black";
    document.getElementById("wonStep2").style.backgroundColor = "#d89100";
    questionNum++;
    loadQuestion(questionNum);
  }
});

document.querySelector("#answer3").addEventListener("click", function (evt) {
  if (corrAnsw == 3) {
    document.getElementById("wonStep3").style.color = "black";
    document.getElementById("wonStep3").style.backgroundColor = "#d89100";
    questionNum++;
    loadQuestion(questionNum);
  }
});

document.querySelector("#answer4").addEventListener("click", function (evt) {
  if (corrAnsw == 4) {
    document.getElementById("wonStep4").style.color = "black";
    document.getElementById("wonStep4").style.backgroundColor = "#d89100";
    questionNum++;
    loadQuestion(questionNum);
  }
});

//Загрузка вопроса
function loadQuestion(number) {
  /*lifelines.refreshScreen();*/

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
  quest.textContent = mydata[number].question;
  // Download answers
  span.textContent = mydata[number].answ1;
  span1.textContent = mydata[number].answ2;
  span2.textContent = mydata[number].answ3;
  span3.textContent = mydata[number].answ4;

  console.log(mydata[0].answ4);

  corrAnsw = mydata[number].correct_answ;
}
