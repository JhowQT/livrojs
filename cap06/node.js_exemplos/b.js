/*
Elaborar um programa que leia nome e idade de 'n' clientes de um banco (Até ser digitado "Fim" no nome).
Após, classifique e exiba os clientes em 2 grupos: preferencial (a partir de 60 anos) e a Fila normal 
(até 59 anos). Informe a ordme de atendimento em cada grupo com a chegada dos clientes.
*/

const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de cheagda ou 'Fim' para sair do programa")
const clientes = []

do{

    const nome = prompt('Nome: ')
    if(nome == 'Fim'){
        break
    }
    const idade = Number(prompt('Idade: '))
    clientes.push({nome, idade})
    console.log('Ok! Cliente inserido da fila...')
}while(true)
    console.log('\n Fila Preferencial')
    console.log('-'.repeat(40))
    const filaPref = clientes.filter(cliente => cliente.idade >= 60)
    filaPref.forEach((fila, i)=>{
        console.log(`${i + 1}. ${fila.nome}`)
    })
    console.log('\nFila Normal')
    console.log('-'.repeat(40))
    const filaNormal = clientes.filter(cliente => cliente.idade < 60)
    filaNormal.forEach((fila, i)=>{
        console.log(`${i + 1}. ${fila.nome}`)
    })

