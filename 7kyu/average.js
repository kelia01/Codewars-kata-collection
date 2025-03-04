// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest 
// whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

const average = (scores) => {
   return Math.round((scores.reduce((Acc, Current) => Acc + Current))/scores.length);
}
console.log(average([49,3,5,300,7]))