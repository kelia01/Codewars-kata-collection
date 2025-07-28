function removeChar(str){
 if(str.length === 2) return '';
  if(str.length >= 2) {
    return str.slice(1, str.length - 1)
  }
};