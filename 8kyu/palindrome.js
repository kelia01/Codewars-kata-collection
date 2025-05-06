function isPalindrome(x) {
    x = x.toString().toLowerCase();
    return x === x.split('').reverse().join('');
  }