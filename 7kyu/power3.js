//Given a positive integer N, return the largest integer k such that 3^k < N.
// For example,
// 3 --> 0
//4 --> 1

function largestPower(n){
  if(n <= 1) return -1;
  let k = 0
  while ( 3 ** (k+1) < n){
  k++;
  }
  
  return k;
}