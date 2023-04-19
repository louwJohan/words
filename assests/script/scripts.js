let wordList = [];

let text = localStorage.getItem("word_List");
let change = document.getElementById("start").classList;
wordList = text.split(",");
function displayWords() {
  number = Math.floor(Math.random() * wordList.length);

  document.getElementById("word").innerText = wordList[number];
}

document.getElementById("start")?.addEventListener("click", function (e) {
  e.preventDefault();

  if ((document.getElementById("start").innerText = "Start")) {
    let myInterval = setInterval(displayWords, 1000);
    console.log(myInterval)
    document.getElementById("start").innerText = "Stop";
  } else if ((document.getElementById("start").innerText = "Stop")) {
    clearInterval(myInterval);
    document.getElementById("start").innerText = "Start";
  }
});

document.getElementById("add")?.addEventListener("click", function (e) {
  e.preventDefault();
  let words = document.getElementById("words").value;
  localStorage.setItem("word_List", [words]);
});
