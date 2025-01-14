/*
Elaborar um programa para um Cinema, que leia o Titulo e a duração de um filme em minutos.
Exiba o titulo do filme e converta a duração para horas e minutos, conforme destacado na figura 26.
*/
let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    let titulo = frm.inTitulo.value
    let duracao = Number(frm.inDuracao.value)

    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60

    resp1.innerText = `Titulo: ${titulo}`
    resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`
    
    e.preventDefault()
})