/*
Elaborar um programa para uma revenda de veículos. 
O programa dere ler o modelo e proçe do veículo.
Apresentar como resposta o valor da entrada (50%) e o saldo em 12x. 
*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")
let resp3 = document.querySelector("h5")

frm.addEventListener("submit", (e) =>{
    let modelo = frm.inModelo.value
    let preco = Number(frm.inPreco.value)

    let entrada = Math.floor(preco/2)
    let parcela = entrada / 12

    resp1.innerText = `Promoção: ${modelo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    e.preventDefault()
})  