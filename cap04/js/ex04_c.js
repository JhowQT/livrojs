/*
Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas 
depositado em um terminal de estacionamento rotativo.
O programa deve informar o tempo de permanência do veiculo e o troco (se existir).
Se o valor for inferior ao tempo minimo, exiba a mensagem: "Valor Infsuficiente".
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#inResposta1")
const resp2 = document.querySelector("#inResposta2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inNumero.value)
    const tempo = [30, 60, 120]

    if(valor < 1.75  && valor >= 1){
        resp1.innerText = `Tempo: ${tempo[0]} min`
        resp2.innerText = `Troco R$: ${(valor - 1).toFixed(2)}`
    }else if(valor >= 1.75 && valor < 3){
        resp1.innerText = `Tempo: ${tempo[1]} min`
        resp2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`
    }else if(valor >= 3){
        resp1.innerText = `Tempo: ${tempo[2]} min\n
                            Tempo máximo de permanencia do veículo!`
        resp2.innerText = `Troco R$: ${(valor - 3).toFixed(2)}`
    }else{
        resp1.innerText = `Valor insuficiente para pagar o estacionamento`
    }
})
