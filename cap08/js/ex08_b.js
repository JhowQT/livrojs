/*Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir 
a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as funções

validarNome() --> que receba um nome como parametro e retorne true->(nomem completo) ou false->(nome imcompleto).

obterSobrenome() --> que receba um nome como parametro e retorne o ultimo nome do aluno em letras minusculas.

contarVogais() -->que receba um nome e retorne o número de vogais deste, com dois digitoa. 
*/

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    // let nome2 = nome.replace(/ /g, "").toLowerCase().match(/[aeiouáàâãéêèíìóòôõûúù]/g)
    // console.log(nome2 ? nome2.length:0)
    function validarNome(nome2){
        let verificaNome = nome2.trim().trimEnd().split(" ")
        return verificaNome.length >= 2 ? true : false
    }
    function obterSobrenome(nome2){
        let pegaUltimpoNome = nome2.trim().trimEnd().split(" ")
        return pegaUltimpoNome[pegaUltimpoNome.length-1].toLowerCase()
    }
    function contarVogais(nome2){
        let contaVogais = nome2.replace(/ /g, "").toLowerCase().match(/[aeiouáàâãéêèíìóòôõûúù]/g)
        return contaVogais ? contaVogais.length:0
    }
    const nome3 = obterSobrenome(nome)
    const numVogais = contarVogais(nome)
    const validaNome = validarNome(nome)

    if(validaNome == false){
        resp.innerText = `Digite um nome valido, diferente de: ${nome}`
    }else{
        resp.innerText = `Senha Inicial: ${nome3}${numVogais <= 9? `0${numVogais}`: numVogais}`
    }
})




