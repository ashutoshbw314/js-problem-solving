// 13-4-20

function sort(a) {
  if (!Array.isArray(a) || a.length == 0) return [];
  a = a.slice(); 
  for (let i = 1; i < a.length; i++) {
    // the loop allows `j - 1` to `-1` but not further below
    // cause the condition then becomes `false`.
    for (let j = i; a[j] < a[j - 1]; j--) {
      let temp = a[j - 1];
      a[j - 1] = a[j];
      a[j] = temp;
    }
  }
  return a;
}
