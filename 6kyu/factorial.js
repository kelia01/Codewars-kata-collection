// In this Kata, you will implement a function count that takes an integer and returns the number of digits
// in factorial(n).

// For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.

function count(n) {
    let num = BigInt(1);
 for(let i=BigInt(n); i>=1; i--){
  num*=i;
 }
   return num.toString().length;
 };
 console.log(count(55));