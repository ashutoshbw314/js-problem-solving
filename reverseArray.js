// 28-4-20
function reverseArray(a) {
  return (a.length == 0) ? [] : [a[a.length - 1]].concat(reverseArray(a.slice(0, a.length - 1)));
}


// Reverse array in place with recursion. I would prefer a loop.
function reverseArrayR(a) {
  function recurse(n) {
    if (n >= Math.floor(a.length / 2)) return;
    [a[n], a[a.length - 1 - n]] = [a[a.length - 1 - n], a[n]];
    return recurse(n + 1); 
  }
  recurse(0);
}
