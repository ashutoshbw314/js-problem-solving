// Feb 26, 2020

function towerHanoi(n) {
  if (n < 2) return n;
  return 2 * towerHanoi(n - 1) + 1;
}
