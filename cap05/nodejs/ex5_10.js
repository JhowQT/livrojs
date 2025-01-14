/*
Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar 
esse valor(em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas inicias não tenham centavos, 
ou ceja, centavos apenas nas ultimas parcelas. Informe como resposta o valor de cada parcela, considerando essa situação.
*/

const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))          //Lê valor de carnet
const num = Number(prompt("N° de parcelas: "))      //Lê  o número de parcelas 
const valorParcelas = Math.floor(valor/num)         //Calcula valor sem decimal
const valorFinal = valorParcelas + (valor % num)    //Calcula parcelas

for(let i = 1; i < num; i++){
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`)    //enquanto i for menorm que num 
}
console.log(`${num}° parcelas: R$ ${valorFinal.toFixed(2)}`)          //ultima parcelas
