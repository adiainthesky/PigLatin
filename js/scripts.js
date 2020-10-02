 $(document).ready(function() {
   const inputWords = [];
   $("form#form-group").submit(function(event) {
    event.preventDefault();
    inputWords.push($("input#word").val()); 
    
    //this .toLowerCase position only temporarily changes to lower case
    inputWords.forEach(function(word) {
      if (word[0].toLowerCase() === "a" || "e" || "i" || "o" || "u") {
        result = (word + "ay");
      }
      else {
          result = word;
        
        };
      
    });

  $("#result").text(result);
  //once this words take out "result" and just use "words" 
  console.log(result);
  console.log(inputWords);
   });
 });


//  let words = [];
//  inputWords.forEach(function(word) {
//    words.push(word.toLowerCase());
//    if (word[0] === "a") {
//      result = (word + "ay");
//    }
//    else {
//        result = word;
     
//      };
   
//  });