// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

// function findMissingNumbers(arr){
// let result = arr.filter((x) => x);
// return result;
// }

// function findMissingNumbers(arr){
//     let filtered = [];
//     for (let i = 0; i< arr.length; i++){
//         if (arr[i+1] !== arr[i] +1 ){
//            filtered.push(arr[i+1]);
//         }
//     }
//     return filtered;
// }

function findMissingNumbers(arr) {
    let filtered = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        for (let j = current + 1; j < next; j++) {
            filtered.push(j); 
        }
    }
    return filtered;
}
console.log(findMissingNumbers([ -3, -2, 1, 5 ]));

