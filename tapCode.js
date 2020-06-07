// https://edabit.com/challenge/ihrD5RjtD34ThEb4z
function tapCode(text) {
  const [A, C, K] = [..."ack"].map(l => l.charCodeAt(0)) 
  function letterOfTap(t) {
    let [r, c] = t.split(" ").map(e => e.length)
    let i = 5 * (r - 1) + c - 1
    return String.fromCharCode(A + i < K ? A + i : A + i + 1)
  }

  function tapOfLetter(l) {
    let i = l.charCodeAt(0) - A
    i == 10 ? i = 2:
    i > 10 ? --i : null
    let [r, c] = [~~(i / 5) + 1, i % 5 + 1]
    return `${".".repeat(r)} ${".".repeat(c)}`
  }

  if (/^[a-z]+$/g.test(text)) return [...text].map(l => tapOfLetter(l)).join(" ")
  else return text.replace(/(\.{1,5} ?){2}/g, tap => letterOfTap(tap.trim()))
}

console.log(tapCode(tapCode("kite")))  // cite
