//Finding occurences of a given number and outputing an array with their index
function findAll(array, n) {
  return array.reduce((acc, val, ind) => {
    if(val === n) acc.push(ind);
    return acc;
  }, [])
}