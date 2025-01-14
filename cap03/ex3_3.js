/*
Elaborar um programa para uma empresa que leia o sálario e o tempo que um funcionario trabalha na 
empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acrécimo de 1% no sálario,
calcule e informe o número de quadriênios a que o funcionário tem direito e o sálario final.
*/

const prompt = require("prompt-sync")() 
const salario = Number(prompt("Sálario: "))
const tempo = Number(prompt("Tempo na Empresa: ")) 
const quadrienio = Math.floor(tempo / 4)
const salarioFinal = salario * quadrienio / 100
console.log(`Quadrilenios: ${quadrienio}`)
console.log(`Sálario final R$: ${(salario + salarioFinal).toFixed(2)}`)