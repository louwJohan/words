
    let wordList = []



    document.getElementById('start')?.addEventListener('click', function(e) {
        e.preventDefault();
        let text = localStorage.getItem("word_List")
        wordList = text.split(',')
    
        setInterval(displayHello, 1000);

        function displayHello() {
                
            number = Math.floor(Math.random() * wordList.length);
    
            document.getElementById("word").innerText = wordList[number];
        }

      });
    
      document.getElementById('add')?.addEventListener('click', function(e) {
        e.preventDefault();
        let words = document.getElementById('words').value
        localStorage.setItem('word_List', [words])
      });

