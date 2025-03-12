// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1

// foobar23 -> foobar24
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    let add = [];
    let splitted = strng.split('');
    if (isNaN(splitted[splitted.length - 1])) {
        splitted.push('1');
        return splitted.join('');
    }

    for (let i = splitted.length - 1; i >= 0; i--) {
        if (isNaN(splitted[i])) {
            break;
        }
        add.unshift(splitted[i]); 
    }

    let numLen = add.length; 
    let numStartIndex = splitted.length - numLen;
    let sum = (parseInt(add.join('')) + 1).toString(); 

    while (sum.length < numLen) {
        sum = '0' + sum;
    }

    splitted.splice(numStartIndex, numLen, ...sum.split(''));

    return splitted.join('');
}


  console.log(incrementString("foobar000"))