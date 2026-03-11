/*  
Write a loop 1 to 200. Use break to exit the loop once you find 100. 
*/
// for (let i = 1; i<= 200; i++) {
//    console.log(i)  // it put first or else it will not print
//    if (i==100) {
//     break; //break stop entire loop
//    }
// }

// for (i = 10; 1 <= 80; i++) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }
/*  
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the 
sum reaches or exceeds 100 
*/

// let num = 1;
// let sum = 0;
// while (sum < 100) {
//   sum = sum + num;
//   if (sum >= 100) {
//     break;
//   }
//   num++;
// }
// console.log("output", sum);
/*  
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first 
square number (like 4, 9, 16, etc.) 
*/
// let square =2;
// for (let i = 1; i <=100; i++) {
//     if(i=== square * square){console.log("number",i);
//         break;
//     }

// }

// for (let i =2; i <=100; i++) {
//     if(Number.isInteger(Math.sqrt(i))){console.log(" square number",i);
//         break;
//     }

// }
/*  
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers. 
*/
// for (let i = 1; i <= 40; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log("even numbers", i)
// }

/* 
display odd number from 55 to 85 and skip the numbers divisible by 5. 
*/
// for (let i = 55; i <= 85; i++) {
//   if (i % 5 ===0) {
//     continue;
//   }
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("print the numbers", i);
// }

/*** 
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So 
display this. 
*/
// for (let i = 1; i <= 60; i++) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }

// let time =1;
// while (time <=60) {console.log("I will invest at least 6 hrs every single day for next 60 days!");
//     time++;

// }

// Subtask-1:
// Find all the odd numbers from 61 to 100.
// for (let i = 61; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("odd numbers",i );
//   }
// }
