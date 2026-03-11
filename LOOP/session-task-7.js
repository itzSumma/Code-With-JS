 /**
  * Function name: textStats(text)
Statement:
 Return an object containing:
Characters count excluding spaces
Words count
Vowels count
Consonants count
Test case 1
Input:
 "JavaScript is fun to learn"
Output:
{ characters: 22, words: 5, vowels: 8, consonants: 14 }
Test case 2
Input:
 " I am OK "
Output:
{ characters: 5, words: 3, vowels: 3, consonants: 2 }
  */  
   
   
   function textStats(text) {
  let vowelsList = "aeiou";
  let characters = 0;
  let vowels = 0;
  let consonants = 0;

  let wordsArray = text.trim().split(" ");
  let words = 0;

  

  // count characters, vowels, consonants
  for (let char of text.toLowerCase()) {
    if (char === " ") continue;

    characters++;

    if (char >= "a" && char <= "z") {
      if (vowelsList.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  // count words
  for (let word of wordsArray) {
    if (word !== "") {
      words++;
    }
  }
  return {
    characters,
    words,
    vowels,
    consonants
  };
}

let Output = textStats( "JavaScript is fun to learn");
let Output2 = textStats( " I am OK ");
console.log(Output);
console.log(Output2);
