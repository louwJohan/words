let text = localStorage.getItem("word_List");
let last = text.substr(text.length - 1);
let wordList = [];
let time_int = localStorage.getItem("time")
const startBtn = document.getElementById("start");
if (last === ","){
  newList = text.slice(0, text.length - 1)
  wordList = newList.split(",")
} else {
  wordList = text.split(",");
}


function displayWords() {
  number = Math.floor(Math.random() * wordList.length);

  document.getElementById("word").innerText = wordList[number];
}


startBtn?.addEventListener("click", function (e) {
  e.preventDefault();

  if ((startBtn.innerText === "Start")) {
    myInterval = setInterval(displayWords, time_int);
    document.getElementById("start").innerText = "Stop";
    startBtn.classList.remove("btn-success");
    startBtn.classList.add("btn-danger")
  } else if ((document.getElementById("start").innerText === "Stop")) {
    clearInterval(myInterval);
    document.getElementById("start").innerText = "Start";
    startBtn.classList.remove("btn-danger");
    startBtn.classList.add("btn-success")
  }
});

document.getElementById("add")?.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Thank you! Your words were added.")
  words = document.getElementById("words").value;
  localStorage.setItem("word_List", [words]);
 
});

document.getElementById("add_time")?.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Thank you! Your time interval is set.")
  time = document.getElementById('time').value;
  localStorage.setItem("time", [time])
});