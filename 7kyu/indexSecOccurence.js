function secondSymbol(s, symbol) {
    let array = s.split('');
    let index =[];
  if(!array.includes(symbol)){
    return -1
  }
    for(let i = 0; i< array.length; i++){
      if(array[i] === symbol){
      index.push(i);
      }
    }
    if(index.length === 1){
        return -1
    }
    return index[1];
  }