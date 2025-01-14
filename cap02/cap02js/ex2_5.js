/*
Na compra de duas unidades de um emsmo medicamento, o cliente recebe
como desconto os centavos do valor total. Elabore um programa que leia
a descrição e preõ de um medicamento, Informe o calor do produto na
promoção.
*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("#outResp1")
let resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    let medicamento = frm.inMedicamento.value
    let preco = frm.inPreco.value

    let valorPagar = Number(Math.floor(preco) + Math.floor(preco))

    resp1.innerText = `Promoção de: ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${Math.floor(valorPagar.toFixed(2))}`
    
    e.preventDefault()
})