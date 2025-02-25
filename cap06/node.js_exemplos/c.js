/*
Elaborar um programa que simule saques em um  caixa eletronico de um banco. Ler o valor solicitado por clientes 
até ser digitado 0. Sabendo que o caixa duspõe apenas de notas de 10, exiba após cada leitura se o saque é valido 
ou invalido. Ao final listar os sauqes válidos e a soma dos saques. Exiba também o número de saques inválidos.
*/

const prompt = require("prompt-sync")()
console.log('Informe o valor dos saques ou (0) para sair')
const saques = []

do{
    const valor = Number(prompt('Saque R$:'))
    if(valor == 0){
        break
    }
    saques.push(valor)
    if(valor % 10 == 0){
        console.log('Saque realizado com sucesso')
    }else{
        console.log('Erro... VALOR INVALIDO (Deve ser multiplo de 10)')
    }
}while(true)
    console.log('\nSaques Validos')
    console.log('-'.repeat(40))
    const saquesValidos = saques.filter(saque => saque % 10 == 0)
    for(const saque of saquesValidos){
        console.log(saque.toFixed(2))
    }
    console.log('-'.repeat(40))
    const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
    console.log(`Total dos saques: R$ ${totalSacado.toFixed(2)}`)

    const saquesInvalidos = saques.length - saquesValidos.length
    console.log(`\nN° de Tentativas de Saques (saques invalidos): ${saquesInvalidos}`)
