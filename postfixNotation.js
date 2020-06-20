// https://edabit.com/challenge/JxM8RyFw42TraEyfN

function postfix(expr) {
  let operations = { 
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };
  return !/ /.test(expr) ? +expr : postfix(expr.replace(/(\d+) (\d+) ([+\-*/])/, (_, a, b, s) => operations[s](+a, +b)));
}
