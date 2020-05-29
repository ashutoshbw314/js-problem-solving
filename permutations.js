// 29-5-20

function permutationsRecursive(arr) {
  let permute = r => arr.length == 0 ? [] :
                     r[0].length == arr.length ? r : 
                     permute(r.flatMap(p => arr.filter(e => !p.includes(e)).map(e => [...p, e]))) 
  return permute(arr.map(e => [e]))
}

function permutationsLoop(arr) {
  let r = arr.map(e => [e])
  for (; r.length && r[0].length != arr.length;  
       r = r.flatMap(p => arr.filter(e => !p.includes(e)).map(e => [...p, e]))); 
  return r 
}

console.log(permutationsRecursive([1, 2, 3]));
console.log(permutationsLoop([1, 2, 3]));
