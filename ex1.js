//Primeiro exemplo
// var num1 = parseInt("1");
// var num2 = parseFloat("2");
// var num3 = String(3);

// console.log((num1 + num2) + num3);

//Segundo exemplo
// var n1 = 1;
// var n2 = 2;
// var n3 = 3;
// if (n3 % n1 >= 3) {
//   console.log("Entrou no if");
// } else if (n3 % n2 >= 2){
//   console.log("Entrou no else if");
// } else{
//   console.log("Entrou no else");
// }

//Terceiro exemplo
const prompt = require("prompt-sync")();

var nome = prompt("Digite o nome do aluno: ");
var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var soma = nota1 + nota2 + nota3;
var media = soma / 3;

if(media >= 6) {
 console.log("O aluno ", nome, ", está aprovado!");
} else {
   console.log("O aluno ", nome, ", está reprovado!");
}