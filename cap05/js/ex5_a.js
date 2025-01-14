/*
a)Elaborar um programa que leia o nome de uma fruta é um número. O programa 
deve repetir a exibição do nome da fruta, de acordo com o número informado.
Utilize o "*" para separar os nomes.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    let fruta = frm.inNome.value
    let numero = Number(frm.inNumero.value)
    let resposta = ``


    for(let i = 1; i <= numero/2; i++){
        resposta = `${fruta}*${resposta}`
        resposta = `${fruta}*${resposta}` 
    }
    if(numero % 2 != 0){
        resposta =` ${resposta}*${fruta}`
    }

    resp.innerText =resposta
})
