function getFirstPython(list) {
    let result = list.filter((x) => x.language === "Python").map(({firstName, country}) => `${firstName}, ${country}`);
    return result.length > 0 ? result[0] :  'There will be no Python developers';
 }