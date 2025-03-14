/*Elaborar um programa que solicite um número de parcelas que devem ser geradas e calcule a data de cada uma dessas
parcelas, uma para cada mês, a partir do mês seguinte ao atual, mantendo o dia atual. Observe o exemplo de execução
desse programa, considerando que a data atual seja 5 de janeiro de 2022
*/

const prompt = require("prompt-sync")()                         // pacote para entreda de dados
const parcelas = Number(prompt("Digite a quatidade de parcelas: "))
const data = new Date()

for(let i =1; i <= parcelas; i++){
    data.setMonth(data.getMonth()+1)

    const dia = data.getDate()
    const mes = data.getMonth()+1
    const ano = data.getFullYear()
    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}
