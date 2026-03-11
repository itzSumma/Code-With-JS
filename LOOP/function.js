function evenSised(str){
    const size = str.length;
console.log(str, size)
    if(size % 2 ===0){
         console.log("Even size")
         return true;
    } 
    else{console.log("Odd size")
        return false;
    };
  
}
    
// evenSised("Dhaka")
// evenSised("Faka")


function doubleOrTripple  (number, double){
    if (double === true) {const result = number * 2;
        return result;
            }
            else {
const result = number * 3;
        return result;
            }
}
// console.log(doubleOrTripple (5,true));
// console.log(doubleOrTripple (5,false));


