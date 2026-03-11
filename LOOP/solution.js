
/**
7.Question: Find the longest word in the sentence.
 */
let sentence = "I love learning JavaScript";
let words = sentence.split(" ");

// console.log(words);

let longestWord = "";
let maxLength = 0;

for(let word of words){
    if( word.length > maxLength) {
        longestWord = word;
    maxLength = word.length;
    }
    
}
console.log(longestWord);