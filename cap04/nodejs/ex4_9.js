/*
Elaborar um programa que leia um número - que deve ser uma centena.
Calcule e exiba a centeba invertida.
Caso o número não seja uma centena, exiba mensagem.
*/
const prompt = require("prompt-sync")()
const numero = Number(prompt("Número(centena): "))

if(numero < 100 || numero >= 1000){
    console.log("ERRO...deve ser uma centena")
    return
}
const num1 = Math.floor(numero/100)         //obtem o 1° número
const sobra = numero % 100                  //obtem oq sobra (dezena)
const num2 = Math.floor(sobra/10)           //obtem o 2° número
const num3 = sobra % 10                     //obtém o 3° número

console.log(`Invertido: ${num3}${num2}${num1}`)     //exibe o número invertido 

