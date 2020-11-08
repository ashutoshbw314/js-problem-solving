// takes a positive integer
function factorize(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return [i, ...factorize(n / i)];
  }
  return [n];
}


console.log(factorize(1729));
// [ 7, 13, 19 ]
