/*
Elaborar um programa para um restaurante que leia o preço
por kg e o coonsumo (em gramas) de um cliente. Exiba o
valor a ser pago, conforme ilustra a figura 2.8.
*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    let quiloPreco = Number(frm.inPreco.value)
    let consumo = Number(frm.inConsumo.value)

    let valorPagar = (quiloPreco/1000) * consumo

    resp1.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`
    
    e.preventDefault()
})