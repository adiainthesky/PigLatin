 $(document).ready(function() {
   const inputWords = [];
   $("form#form-group").submit(function(event) {
    event.preventDefault();
    inputWords.push($("input#word").val());

    let words = [];
    inputWords.forEach(function(word) {
      words.push(word.toLowerCase());
    });

     console.log(words);

   
    words.forEach(function(word) {
      
     if ((word[0] === "q") && (word[1] = "u")) {
        result = (word.slice(2) + "quay");
      }
      
      else if ((word[1] === "q") && (word[2] = "u")) {
        result = (word.slice(3) + word[0] + "quay");
      }

      else if ((word[0] === "a") || (word[0] === "e") || (word[0] === "i") || (word[0] === "o") || (word[0] === "u")) {
        result = (word + "ay");
      }

      else if ((word[1] === "a") || (word[1] === "e") || (word[1] === "i") || (word[1] === "o") || (word[1] === "u")) {
        result = (word.slice(1) + word[0] + "ay");
      }

      else if ((word[2] === "a") || (word[2] === "e") || (word[2] === "i") || (word[2] === "o") || (word[2] === "u")) {
        result = (word.slice(2) + word[0] + word[1] +"ay");
      }

      else if ((word[3] === "a") || (word[3] === "e") || (word[3] === "i") || (word[3] === "o") || (word[3] === "u")) {
        result = (word.slice(3) + word[0] + word[1] + word[2] +"ay");
      }
        
      else {
        result = (word + "ay");
      }
      
    });   

  $("#result").text(result);
  console.log(result);
  console.log(words);

  });
});
