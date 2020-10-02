 $(document).ready(function() {
   $("form#form-group").submit(function(event) {
    event.preventDefault();
    const words = $("input#Words").val();
    let result


   })
 })



 1. Recognizes a word beginning with a vowel regardless of capitalization.  Adds “way” to end.
 Describe: “pigLatin()”
 Test: “It will recognize a vowel as the first letter, regardless of capitalization, and will add “way” to end."" 
 Expect: ((pigLatin(”Australia”)).toEqual(“Australiaway”;

  2. Recognizes a word beginning with “qu” regardless of capitalization.  Moves “qu” to end. Add “ay”.
 Describe: “pigLatin()”
 Test: “It will recognize a "qu" as the first two letters, regardless of capitalization, and will remove them from the beginning of the word and add “quay” to end of word.
 Expect: ((pigLatin(”quilt”)).toEqual(“iltquay”;

 3. Recognizes a word with “qu” as second and third letters regardless of capitalization. Move all letters before (and including “u”) to end. Add “ay”
 Describe: "pigLatin()"
 Test: "It will recoginze "qu" as the second and third letters and remove all of the first three letters from the beggining add them to the end and add "ay"
 Expect: (pigLatin("equal")).toEqual("alquay")
 
 4. Recognizes a word beginning with a consonant (incl “y”) regardless of capitalization. Moves ALL first consecutive consonants to end and add ”ay.”
 Describe: “pigLatin()”;
 Test: "It will recognize a consonant as the first in the word, inlcuding "y," regardless of capitalization, and move all letters until it hits a vowel, will move those letter to end, and add "ay".
 Expect: (pigLatin("cat")).toEqual("atcay")

 

 