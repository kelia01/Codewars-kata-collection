// Write an algorithm that takes an array and moves all of the zeros to the end, preserving 
// the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
   let noZeros = arr.filter((a) => a !== 0)
   let zeros = arr.length - noZeros.length;
   return noZeros.concat(new Array(zeros).fill(0));
  }
  console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));