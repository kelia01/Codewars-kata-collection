// Write a function that takes an array of unique integers and returns the 
// minimum number of integers needed to make the values of the array consecutive 
// from the lowest number to the highest number.
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

function consecutive(array) {
    if(array.length === 0 || array.length === 1) return 0;
    array.sort((a, b) => a-b);
  let min = array[0];
  let max = array[array.length-1];
  
    let counter = (max - min + 1) - array.length ;
 
      return counter;
    }

console.log(consecutive([-1, -5]));