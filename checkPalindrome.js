// March 3, 2020

function checkPalindrome(str) {
  let len = str.length;
  function check(i) {
    return i >= len - 1 - i ? true :
           str[i] == str[len - 1 - i] ? true && check(i + 1) : false; 
  }
  return check(0);
}


console.log(checkPalindrome("kanak"));
console.log(checkPalindrome("Ashutosh"));
console.log(checkPalindrome("AshutoshhsotuhsA"));
console.log(checkPalindrome("a"));
console.log(checkPalindrome(""));
console.log(checkPalindrome("aa"));
console.log(checkPalindrome("ab"));
