// https://edabit.com/challenge/jN89tuARCFbtQm6vE
function ascending(str) {
  let initialNumLen = 1
  let [previousNum, restStr] = [str.slice(0, initialNumLen) * 1, str.slice(initialNumLen)]
  let nextExpectedNum = previousNum + 1
  while(restStr != "") {
    let nextNum = restStr.slice(0, (nextExpectedNum + "").length) * 1
    if (nextNum == nextExpectedNum) {
      previousNum = nextNum
      restStr = restStr.slice((nextExpectedNum + "").length)
      nextExpectedNum = previousNum + 1
    } else {
      initialNumLen++
      if (initialNumLen > ~~(str.length / 2)) return false;
      [previousNum, restStr] = [str.slice(0, initialNumLen) * 1, str.slice(initialNumLen)]
      nextExpectedNum = previousNum + 1
    }   
  }
  return true
}

console.log(ascending("891011"));            // true
console.log(ascending("121315"));            // false
console.log(ascending("99100101102"));       // true
console.log(ascending("999100010011002"));   // true
console.log(ascending("99991000010001"));    // true
console.log(ascending("99991000010002"));    // false

