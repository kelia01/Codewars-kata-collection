function findUniq(arr) {
  const [a,b,c] = arr;
  const common = a === b ? a : (a === c ? a : b);
  return arr.find(x => x !== common);
}