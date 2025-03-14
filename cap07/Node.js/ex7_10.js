/*Elaborar um programa que leia a altura de uma árvore (número de linhas) e após exiba a árove 
iniciando com 2 estrelas (asteriscos) e aumentando em 2 a cada linha. Fazer com que a árvore
tenha uma margem esquerda fixa de 30 espaços e fique centralizada, conforme ilustra a execução
do programa a seguir:
*/

const prompt = require("prompt-sync")()                         // pacote para entreda de dados
const altura = Number(prompt("Digite a altura da árvore: "))
console.log()

for(let i = 1; i <= altura; i++){
    const espacos = 30 + (altura - i)
    console.log(" ".repeat(espacos) + "*".repeat(i*2))
}    
// if(altura % 2 == 0 ){
//     console.log(" ".repeat(30+(altura -1))+"**")
// }
for(let i = 2; i <= altura/2; i++){
    console.log(" ".repeat(30+(altura - 1))+"**")
}