// correct
let s1 = [
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
];

// wrong
let s2 = [
  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
];

function sudokuValidator(x) {
  let check = r => [...new Set(r)].length != 9 ? false :
                   !r.every(v => v >= 1 && v <= 9) ? false : true;
  
  let startIndices = [];
  for (let x = 0; x < 9; x += 3)
    for (let y = 0; y < 9; y += 3)
       startIndices.push([x, y]);    

  let smallSquare = ([a, b]) => {
    let result = [];
    for (let v = 0; v <= 2; v++)
      for (let h = 0; h <= 2; h++)
        result.push(x[a + v][b + h]);
    return result;
  };
  
  return !x.every(r => check(r)) ? false : 
         !x[0].map((_, i) => x.map(r => r[i])).every(c => check(c)) ? false :
         !startIndices.map(i => smallSquare(i)).every(e => check(e)) ? false : true;
}

console.log(sudokuValidator(s1));
console.log(sudokuValidator(s2));
