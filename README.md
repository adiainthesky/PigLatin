# Pig Latin Translator

#### Pig Latin Translator, 10/1/20

#### By **Adelaide Nalley and Agata Kolodziej**

## Description
This website offers tool to translate words from English to Pig Latin.

## Specs/Tests

1. Regardless of user input, all words are converted to lowercase.  

2. Recognizes a word beginning with a vowel.  Adds “way” to end.
 Describe: “pigLatin()”
 Test: “It will recognize a vowel as the first letter and will add “way” to end."" 
 Expect: ((pigLatin(”Australia”)).toEqual(“Australiaway”);

3. Recognizes a word beginning with a consonant (incl “y”). Moves ALL first consecutive consonants to end and add ”ay.”
 Describe: “pigLatin()”;
 Test: "It will recognize a consonant as the first in the word, inlcuding "y," and move all letters until it hits a vowel, will move those letter to end, and add "ay".
 Expect: (pigLatin("cat")).toEqual("atcay”); 

4. Recognizes a word beginning with “qu”.  Moves “qu” to end. Add “ay”.
 Describe: “pigLatin()”
 Test: “It will recognize a "qu" as the first two letters and will remove them from the beginning of the word and add “quay” to end of word.
 Expect: ((pigLatin(”quilt”)).toEqual(“iltquay”);

5. Recognizes a word with “qu” as second and third letters. Move all letters before (and including “u”) to end. Add “ay”
 Describe: "pigLatin()"
 Test: "It will recognize "qu" as the second and third letters and remove all of the first three letters from the beginning add them to the end and add "ay"
 Expect: (pigLatin("equal")).toEqual("alequay”);
 


## Setup/Installation

* Follow link to ...
* ...
* ...

## Known Bugs

None at this time.

## Support and contact details

Please contact adiainthesky@gmail.com for questions, concerns, suggestions, or contributions.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* VSCode

### License

This software is licensed under the MIT license.

Copyright (c) 2020 Adelade Nalley