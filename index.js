// Prática exemplo
// var salario_bruto = 7500;
// var ir = salario_bruto * 0.10;
// var salario_liquido = salario_bruto - ir;

// console.log("Salário líquido: R$", salario_liquido);

// Prática exemplo
const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var ir = salario_bruto * 0.10;
var salario_liquido = salario_bruto - ir;

console.log("Olá", nome, "! Seu salário líquido é: R$", salario_liquido);