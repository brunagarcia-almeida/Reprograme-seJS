// Exemplo - Prática 1
// var salario_bruto = 7500;
// var ir = salario_bruto * 0.10;
// var salario_liquido = salario_bruto - ir;

// console.log("Salário líquido: R$", salario_liquido);

// Exemplo - Prática 2
// const prompt = require("prompt-sync")();

// var nome = prompt("Digite seu nome: ");
// var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
// var ir = salario_bruto * 0.10;
// var salario_liquido = salario_bruto - ir;

// console.log("Olá", nome, "! Seu salário líquido é: R$", salario_liquido);

// Exemplo - Prática 3
// const prompt = require("prompt-sync")();

// var nome = prompt("Digite seu nome: ");
// var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
// var ir = null;
// var salario_liquido = null;

// if (salario_bruto > 0 && salario_bruto <= 1903.98) {
//   ir = salario_bruto * 0.05;
// } else if (salario_bruto <= 2826.65) {
//   ir = salario_bruto * 0.075;
// } else {
//   ir = salario_bruto * 0.15;
// }

// salario_liquido = salario_bruto - ir;
// console.log("Olá", nome, "! Seu salário líquido é: R$", salario_liquido);

// Exemplo - Prática 4
const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var dependentes = parseInt(prompt("Digite a quantidade de dependentes que você possui: "));
var renda_PerCapita = salario_bruto / (dependentes + 1);
var ir = null;
var salario_liquido = null;

if(renda_PerCapita >= 500) {
  if (salario_bruto > 0 && salario_bruto <= 1903.98) {
    ir = salario_bruto * 0.05;
  } else if (salario_bruto <= 2826.65) {
    ir = salario_bruto * 0.075;
  } else {
    ir = salario_bruto * 0.15;
  }
} else {
  ir = 0;
}

salario_liquido = salario_bruto - ir;
console.log("Olá", nome, "! Seu salário líquido é: R$", salario_liquido);