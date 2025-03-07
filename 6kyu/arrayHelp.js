// This kata is designed to test your ability to extend the functionality of built-in classes. In this case,
//  we want you to extend the built-in Array class with the following methods: square(), cube(), average(),
//  sum(), even() and odd().

Array.prototype.square = function (){
    return this.map((x) => x*x)
}
Array.prototype.cube = function (){
  return this.map((x) => x*x*x)
}
Array.prototype.average = function (){
  return this.reduce((acc, current) => acc + current, 0)/this.length
}
Array.prototype.sum = function (){
 return this.reduce((acc, current) => acc + current, 0)
}
Array.prototype.even = function (){
  return this.filter((x) => x % 2 === 0)
}
Array.prototype.odd = function (){
  return this.filter((x) => x % 2 !== 0)
}