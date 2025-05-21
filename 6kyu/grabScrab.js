function grabscrab(anagram, dictionary) {
  let sortedAnagram = anagram.split('').sort().join('');
  return dictionary.filter((x) => x.split('').sort().join('') === sortedAnagram)
}