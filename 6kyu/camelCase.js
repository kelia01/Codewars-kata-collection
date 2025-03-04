// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always 
// capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
  let splitted = str.split('');
  for (let i = 0; i < splitted.length; i++){
    if(splitted[i] === '-' || splitted[i] === '_'){
        splitted[i+1] = splitted[i+1].toUpperCase();
    }
  }
  return splitted.filter((x) => {
    return (x !== '-' && x !== '_')}).join('');
}
console.log(toCamelCase("the_stealth_warrior"));