/*
Elaborar um programa para uma LanHouse de um Aeroporto - O programa deve ler o valor de cada 15 minutos de uso de um computador
e o tempo de uso por em cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos
devem ser cobrados de forma integral.
*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    let minutos = Number(frm.inValor.value)
    let tempo = Number(frm.inTempo.value)

    let valorPagar = Math.ceil(tempo/15) * minutos

    resp1.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`
    
    e.preventDefault()
})