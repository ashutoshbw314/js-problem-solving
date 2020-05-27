// March 8, 2020
function permutationOf(array) {
  function findRest(arrLarge, arrSmall) {
    let rest = [];
    for (let elt of arrLarge) {
      if (!arrSmall.includes(elt)) rest.push(elt);
    }

    return rest;
  }
  
  function permute(result) {
    if (result.length == 0) {
      return [];
    } else if (result[0].length == array.length) {
      return result;
    }

    let output = [];

    for (let perm of result) {
      let restElts = findRest(array, perm);
      for (let elt of restElts) {
        output.push([...perm, elt]); 
      }
    }

    return permute(output);
  }

  return permute(array.map(elt => [elt]));
}

let result = permutationOf([1, 2, 3, 4, 5, 6]); // above 9 elements it doesn't works
result.forEach(perm => console.log(perm.join(', ')));
console.log(result.length);
