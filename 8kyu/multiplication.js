function multiTable(number) {
    let product = [];
   for (let i = 1; i <= 10; i++){
     product.push(`${i} * ${number} = ${i * number}`);
   }
   return product.join('\n');
  }