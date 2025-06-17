const mostFrequentItemCount = (collection) => {
    let countObj = {};
  const count = collection.map((item) => countObj[item] = (countObj[item]+1)||1);
    let largest = 0;
    for(let elem in countObj){
        if (countObj[elem] > largest){
            largest = countObj[elem];
        }
    }
    return largest;
}