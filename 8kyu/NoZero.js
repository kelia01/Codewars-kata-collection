// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    let numString = n.toString().split('');
    if(numString[length-1] === 0){
        numString.pop(0);
    }
    return numString.join('');
  }
  console.log(noBoringZeros(1050));
