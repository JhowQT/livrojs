/*

*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("#outResp1")
let resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    let produto = frm.inProduto.value
    let preco = Number(frm.inPreco.value)

    let metadePreco = preco / 2
    let valorPagar = preco * 2 + metadePreco

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorPagar}`
    resp2.innerText = `O 3° produto custa apenas R$: ${metadePreco}`

    e.preventDefault()
})