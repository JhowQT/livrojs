/*
Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração,
em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas). 
*/

const prompt = require("prompt-sync")() 
const racao = Number(prompt("Peso da ração (kg): "))   
const consumo = Number(prompt("Cosumo por dia do gato(gm): ")) 
const racaoGramas = (racao * 1000)   
const duracaoDias = Math.floor(racaoGramas / consumo)
const sobraRacao = racaoGramas % consumo
console.log(`Duração da ração em dia(s): ${duracaoDias}`)
console.log(`Sobra da ração em grama(s): ${sobraRacao}`)