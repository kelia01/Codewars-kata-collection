// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]

const filter_list = (l) => {
   return l.filter((x) => typeof(x) !== 'string');
}
