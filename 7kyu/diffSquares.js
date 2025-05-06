function differenceOfSquares(n) {
    let array =[];
    for (let i= 0; i<= n; i++){
      array.push(i);
    }
    let sum = array.reduce((sumOne, current) => sumOne+current);
    let squareOfSum = sum*sum;
    let mapped = array.map((x) => x*x);
    let sumOfSquares = mapped.reduce((sums, currentV) => sums+currentV);                     
    return squareOfSum -sumOfSquares;
  }