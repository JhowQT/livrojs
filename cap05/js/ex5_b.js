
/*
Digamos que o número de chinchilas de uma fazenda triplica a cada ano, 
após o primeiro ano. Elaborar um programa que leia o número inicial
de chinchilas e anos e informe ano a ano o número médio previsto de 
chinchilas da fazenda. O número inicial de chinchilas deve ser maior
ou igual a 2 (um casal).
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    let numeroChinchilas = Number(frm.inNumero.value)
    let numeroAnos = Number(frm.inAnos.value)
    let resposta = ``
    let total = numeroChinchilas

    for (let i = 1; i <= numeroAnos; i++){
        resposta = `${resposta}${i} º Ano ${total} Chinchilas\n`
        total = total * 3 
    }
    resp.innerText = resposta
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
});