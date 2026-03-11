/**
 * Checking Array Membership with ‘includes’

Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

let books = [
  "HTML Tutorials",
  "CSS Mastery",
  "JavaScript basics",
  "Mongodb",
  "React Handbook",
];
if (books.includes("JavaScript basics")) {
  console.log("There is a JavaScript book");
} else {
  console.log("No, there isn't any JavaScript book ");
}
