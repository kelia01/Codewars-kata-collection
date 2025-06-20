function countDevelopers(list) {
  let count = 0;
  let obj = {};
  for(let elem of list){
    if(elem.continent === 'Europe' && elem.language === 'JavaScript'){
      count += 1;
    }
  }
  return count;
}