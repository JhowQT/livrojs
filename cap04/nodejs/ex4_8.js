/*
Uma farmacia necessita de um programa que leia o total de uma compra. 
Exiba como resposta o N° máximo de vezes que  o cliente pode parcelar essa compra e o valor de cada parcela.
Cosnidere as seguintes condições:
a) Cada parcela deve ser de, no minimo, R$ 20,00.
b) O número máximo de parcelas permitido é 6. 
*/

const prompt = require("prompt-sync")()
let compra = Number(prompt("Dígite o valor da compra: "));

if (compra / 20 > 6){
    console.log(`Não e possivel parcelar`)
}else{
    let parcela = compra / 6
    console.log(`Número máximo de parcelas é 6 de ${parcela.toFixed(2)}`)
}

const valor = Number(prompt("Valor da compra R$: "))
const aux = Math.floor(valor/20)
let parcelas
if (aux == 0) {
    parcelas = 1
}else if(aux > 6){
    parcelas = 6
}else{
    parcelas = aux
}
const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

