let letters = [..."Hello world"];
let vowels = "";

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  if (/[aeiou]/.test(letter)) {
    vowels += letter;
  }
}
console.log(vowels);