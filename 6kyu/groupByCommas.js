function groupByCommas(n) {
    let arr = [];
  if(n.toString().length < 4) return n;
  let newN = n.toString().split('');
  for(let i = newN.length-3; i > 0; i -= 3){
   newN.splice(i,0,',');
  }
  return newN.join('')
}
console.log(groupByCommas(123456789));