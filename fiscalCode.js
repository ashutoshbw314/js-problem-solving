// https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

function fiscalCode(person) {
  let vcs = s => [s.match(/[aeiou]/gi), s.match(/[^aeiou]/gi)].map(a => a == null ? "" : a.join("").toUpperCase());
  function surname(s) {
    let [vowels, consonants] = vcs(s);
    return s.length < 3 ? consonants + vowels + "X" :
      consonants.length > 2 ? consonants.slice(0, 3) :
      consonants.length < 3 ? consonants + vowels.slice(0, 3 - consonants.length) : null;
  }

  function name(s) {
    let [vowels, consonants] = vcs(s);
    return s.length < 3 ? consonants + vowels + "X" :
      consonants.length === 3 ? consonants :
      consonants.length > 3 ? [0, 2, 3].map(i => consonants[i]).join("") :
      consonants.length < 3 ? consonants + vowels.slice(0, 3 - consonants.length) : null;
  }
  
 let dobgdr = ([day, month, year], gender) => year.slice(-2) + months[month] + (gender == "M" ? day.padStart(2, "0") : day * 1 + 40);
 return surname(person.surname) + name(person.name) + dobgdr(person.dob.split("/"), person.gender);
}
