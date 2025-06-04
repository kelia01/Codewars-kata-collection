// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"

const getMiddle = (s) => {
    let index = 0;
    if(s.length % 2 !== 0){
        index = Math.floor(s.length/2);
        return s[index];
    }
    index = Math.floor(s.length/2);
    return s[index]+s[index+1];
}
console.log(getMiddle('test'))