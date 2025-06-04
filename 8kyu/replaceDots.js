const replaceDots = str => {
    let result = str.split('');
     for(let i = 0; i < result.length; i++){
       if(result[i] === '.'){
         result[i] = '-';
       }
     }
     return result.join('');
   }