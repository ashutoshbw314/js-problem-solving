// 23-4-2020
// Tonight, father gave me a problem a specific of way to find
// the power of two. The pattern is:
//  input | output
//  ----- | -----
//  1 | 1
//  2 | 2
//  3 | 4
//  4 | 8
//    .
//    .
//    .
//
// Though this is not actually two to the power n. However,
// this is my solution.

function twoPower(n) {
  if (n % 2 == 1) {
    result = 1;
    for (let i = 1; i < Math.ceil(n / 2); i++) result *= 2;
    return result * result;
  } else {
    return twoPower(n + 1) / 2;
  }
}

console.log(twoPower(4));
