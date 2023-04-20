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
  if (text.length === 0){
    alert("Please add words in Settings")
  } else if (time_int === 0 || time_int === undefined){
    alert("Please set the time interval in Settings")
  } else {
    if ((startBtn.innerText === "Start")) {
      myInterval = setInterval(displayWords, time_int);
      startBtn.innerText = "Stop";
      startBtn.classList.remove("btn-success");
      startBtn.classList.add("btn-danger")
    } else if ((document.getElementById("start").innerText === "Stop")) {
      clearInterval(myInterval);
      startBtn.innerText = "Start";
      startBtn.classList.remove("btn-danger");
      startBtn.classList.add("btn-success")
    }
  }
    


  
});

document.getElementById("add")?.addEventListener("click", function (e) {
  e.preventDefault();
  
  words = document.getElementById("words").value;
  if (words.length === 0 ){
    alert("Please add words!")
  } else {
    localStorage.setItem("word_List", [words]);
    alert("Thank you! Your words were added.")
  }
  
 
});

document.getElementById("add_time")?.addEventListener("click", function (e) {
  e.preventDefault();
  
  time = document.getElementById('time').value;
  if (time.length === 0){
    alert("Please set a time interval")
  } else {
    localStorage.setItem("time", [time])
    alert("Thank you! Your time interval is set.")
  }
  
});