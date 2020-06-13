// https://edabit.com/challenge/b9FBAhxaijR9fzxgo

function distanceToNearestVowel(str) {
  const vowelsRegex = /[aeiou]/;
  const searchForward = i => str.slice(i).search(vowelsRegex);
  const searchBackward = i => [...str.slice(0, i + 1)].reverse().join("").search(vowelsRegex);
  return [...str].map((_, i) => Math.min(...[searchBackward(i), searchForward(i)].filter(v => v != -1)));  
}
