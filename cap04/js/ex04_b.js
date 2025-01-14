/*
Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa".
Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve".
E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa grave" 
*/


const frm = document.querySelector("form")
const resp = document.querySelector("#inResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const velocidadePermitida = Number(frm.inNumero1.value)
    const velocidadeCondutor = Number(frm.inNumero2.value)
    const multaLeve = 1.2

    const verificadirDeVelocidade = velocidadeCondutor <= velocidadePermitida ? "Sem Multa" : 
            velocidadeCondutor / velocidadePermitida <= multaLeve ? "Multa Leve":
            "Multa Grave"

    resp.innerText = `Situação: ${verificadirDeVelocidade}`
})