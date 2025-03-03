// Write a function which takes two integers num1 and num2 and returns 1 if there is
//  a straight triple of a digit at any place in num1 and also a straight double of 
//  the same digit in num2.
// If this isn't the case, return 0.

function tripledouble(num1, num2) {
    let repeat = 0;
   let str1 = num1.toString().split('');
   let str2 = num2.toString().split('');
    for(let i=0; i< str1.length; i++){
      if(str1[i] === str1[i+1] && str1[i] === str1[i+2]){
        repeat = str1[i];
        for (let j=0; j< str2.length; j++){
          if(str2[j] === repeat && repeat === str2[j+1]){
            return 1;
          }
        }
      }
    }
  return 0;
  }