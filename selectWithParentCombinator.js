/**
 * An function that emulates the missing css parent combinator
 * @param {string} expr - An expression made of equal to or more than 2 selectors
 *                        seperated by '<' which denotes the parent combinator.
 *                        For example, if expr is "li < ul", it selects all <li>'s
 *                        that have a child <ul>.
 * @return {Null|Array}
 */
function selectWithParentCombinator(expr) { 
  let slts = expr.split("<"); 
  if (slts.length < 2) throw new Error("Insufficent operands");
  let result = document.querySelectorAll(slts[slts.length - 1]);
  for (let i = slts.length - 2; i >= 0; i--) {
    let nodes = document.querySelectorAll(slts[i]);
    result = [...nodes].filter(n1 => [...result].some(n2 => n2.parentElement == n1));
    if (nodes.length == 0 || result.length == 0) return null;
  }
  return result;
}
