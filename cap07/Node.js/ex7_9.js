/*Elaborar um programa que leia uma formula matématica e analise se os parênteses utilizados na fórmula
estão corretos. A análise deve considerar dois fatores: o número de "(" deve ser igual ao número de ")"
e, ao ler a fórmula da esquerda para a direita, em nenhum momento, o número de ")" pode ser maior que o 
número de "(", ou seja, não pode fechar um parênteses sem antes ter aberto. 
*/

const prompt = require("prompt-sync")()                         // pacote para entreda de dados
const formula = prompt("Digite aqui a formula: ")

let abre  = 0
let fecha = 0

for(const simbolo of formula){
    if(simbolo == "("){
        abre++
    }else if(simbolo == ")"){
        fecha++
    }

    if(fecha > abre){
        break
    }
}
if(abre == fecha){
    console.log("OK! Fórmula correta (em relação aos parenteses)")
}else{
    console.log("ERRO...Fórmula incorreta")
}


