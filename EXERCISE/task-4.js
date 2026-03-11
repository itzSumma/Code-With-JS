/**
 * Checking if it's an Array

Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
Imran Al
Prompt er egula korcen.?

 */

let fruits = ["Apple", "Banana", "Lichi", "Mango", "Grape"];

let name = "Summa";
let age = 23;
let isStudent = true;

if (Array.isArray(fruits)) {
  console.log("Is fruits are Array");
} else {
  console.log("Is fruits not an Array");
}

if (Array.isArray(age)) {
  console.log("Is age an Array");
} else {
  console.log("Is age not an Array");
}
if (Array.isArray(name)) {
  console.log("Is name are an Array");
} else {
  console.log("Is name  not an Array");
}
if (Array.isArray(isStudent)) {
  console.log("Is isStudent an Array");
} else {
  console.log("Is isStudent not an Array");
}
