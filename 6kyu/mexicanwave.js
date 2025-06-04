function wave(str){
  let arr = new Array(str.length);
  return arr.fill(str, 0, str.length)
  .map((x, index) => {
    if(x[index] === ' ') return null;
    return x.slice(0, index)+ x[index].toUpperCase()+x.slice(index+1, x.length);
  }).filter((x) => x !== null);
}