// https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
function caesarCipher(s, k) {
  return s.replace(/[a-z]/gi, l => {
    const CHAR_COUNT = 26
    const A_UPPER = "A".charCodeAt(0)
    const A_LOWER = "a".charCodeAt(0)
    const LETTER_CODE = l.charCodeAt(0)
    const START = LETTER_CODE < A_LOWER ? A_UPPER : A_LOWER

    let traposedIndex = (LETTER_CODE - START + k) % CHAR_COUNT
    if (traposedIndex < 0) traposedIndex += CHAR_COUNT
    return String.fromCharCode(START + traposedIndex)
  })
}
