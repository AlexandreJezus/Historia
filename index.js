const prompt = require("prompt-sync")();
let palavrasHistoria = 1;
let palavras = prompt("Escreva a sua história de maneira breve.");
palavras.split(" ");
// console.log(palavras, palavras.length);
for (let i = 0; i < palavras.length; i++) {
  if (palavras[i] == " ") palavrasHistoria = palavrasHistoria + 1;
}
console.log(
  "As palavras são",
  palavras + " : e são " + palavrasHistoria + " palavras."
);
