/*
Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem desse produto.
Exiba as etiquetas com o nome do produto, com no máxima 2 etiquetas por linha.
*/

const prompt = require("prompt-sync")()

let nomeProduto = prompt("Nome do produto: ")
let numeroEtiquetas = Number(prompt("Número de etiquetas ? "))

for(let i = 1; i <= numeroEtiquetas/2; i++){
    console.log(`${nomeProduto.padEnd(25, ".")} ${nomeProduto.padEnd(25)} `)
}
if(numeroEtiquetas % 2 == 1){
    console.log(nomeProduto)
}