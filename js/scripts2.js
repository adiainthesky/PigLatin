$(document).ready(function() {
  const inputWords = [];
  const vowels = ["a", "e", "i", "o", "u"];
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

     else if (word[0] === vowels) {
       result = (word + "ay");
     }

     else if (word[1] === vowels) {
       result = (word.slice(1) + word[0] + "ay");
     }

     else if (word[2] === vowels) {
       result = (word.slice(2) + word[0] + word[1] +"ay");
     }


     else if (word[3] === vowels) {
      result = (word.slice(3) + word[0] + word[1] + word[2] +"ay");
    }
      
    // else {
    //   result = (word + "ay");
    // }
    
  });   
 

 $("#result").text(result);
 console.log(result);
 console.log(words);

 });
});
