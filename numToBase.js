function numToBase(n, b) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = n % b + result;
    n = (n / b);
  } while (n > 0);
  return result;
}

console.log(numToBase(13, 10));

