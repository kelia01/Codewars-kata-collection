//Implement your own range and sum  functionalities in the sense reduce, map, ... works in.

Array.range = (start, count) => [...Array(count).keys()].map(i => start + i);

//Don't use arrow function here because they don't have their own this

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};
