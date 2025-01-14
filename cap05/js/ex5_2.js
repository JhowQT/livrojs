const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const numero = Number(frm.inNumero.value)
let resposta = `Entre ${numero} e 1 :`

for(let i = numero; i > 0; i = i - 1){   
    resposta = resposta + i + ","
}
    resp.innerText = resposta
})