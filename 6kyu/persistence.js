function persistence(num) {
  let count = 0; 
  
  while(num >= 10){
    let result = 1;
     for (let n of num.toString()){
     result *= Number(n);
   }
    num = result;
    count++;
  }
  return count;
}