function duplicateCount(text){
  let count = 0;
  let obj = {};
  let splitted = text.toLowerCase().split('');
  for(let key of splitted){
    obj[key] = (obj[key] || 0) + 1;
  }
  for(let key in obj){
    if(obj[key] > 1){
      count++;
    }
  }
  return count;
}