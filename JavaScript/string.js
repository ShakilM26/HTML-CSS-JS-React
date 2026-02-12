// string declare 3 ways 

let title = 'I am a Web Developer'
let title2 = "I am a Web Developer"
let title3 = `I am a Web Developer`

console.log(title3)

// length
console.log(title.length)

// UPPERCASE and lowercase
console.log(title.toUpperCase());
console.log(title.toLowerCase());

// slice
console.log(title.slice(0, 4));

// replace
console.log(title.replace('Web', 'Front-end'));

// word check
console.log(title.includes('Developer'));

// -------------------------------------------------------

let sentence = "I am a web developer interning in 2026";

console.log(sentence.includes('interning'))

// position no of certain word
console.log(sentence.indexOf('developer'));

// startswith
console.log(sentence.startsWith('I am'))

// endswith
console.log(sentence.endsWith('2026'))
