/*A entrada para um club de pesca custa R$20,00 por pessoa e cada pessoa tem o direito a levar um peixe. Peixes extras custam 12,00.
Elabore um programa que leia o número de pessoas de  uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.
*/

const prompt = require("prompt-sync")()                                             //adiciona pacote prompt-sync

let custoPesca = Number(20)
let peixesExtras = Number(12)

let numeroDePessoas = Number(prompt("Número de pessoas da familia: "))
let totalPeixes = Number(prompt("Informe o total de peixes: "))
let numeroDePeixesExtras = Number(prompt("Informe o número de peixes extras: "))



totalEntradas = custoPesca * numeroDePessoas
pagarPeixes = peixesExtras * numeroDePeixesExtras

totalPagar = totalEntradas + pagarPeixes

console.log(`Total a pagar: ${totalPagar}`)