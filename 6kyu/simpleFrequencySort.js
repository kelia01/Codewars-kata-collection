// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing

function solve(arr){
    let count = 0;
    for(let i= 0; i< arr.length; i++){
        let sorted = arr.sort((a,b) => {
          if(sorted[i] === sorted[i+1]){
            count+=1;
          }
        });
    }
  }