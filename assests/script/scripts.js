
    let wordList = []



    document.getElementById('start')?.addEventListener('click', function(e) {
        e.preventDefault();
        let text = localStorage.getItem("word_List")
        wordList = text.split(',')
        console.log(wordList[2])
        document.getElementById('word').textContent = wordList
      });
    
      document.getElementById('add')?.addEventListener('click', function(e) {
        e.preventDefault();
        let words = document.getElementById('words').value
        localStorage.setItem('word_List', [words])
      });

