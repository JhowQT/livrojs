/*Suponha que o prazo para o pagamneto de uma infaração de transito com desconto seja de 90 dias. 
Elaborar um programa que leia a data de uma infração e o valor da multa.
Informe qual a data limite do pagamento com desconto (até 90 dias) e o valor a ser
pago até essa data (com 20% de desconto) 
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#inResp1")
const resp2 = document.querySelector("#inResp2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const dataMulta = frm.inData.value.split("-")
    const valor = Number(frm.inValor.value) * 1.2

    const dia = Number(dataMulta[2])
    const mes = Number(dataMulta[1])
    const ano = Number(dataMulta[0]) 
    // dataLimiteMulta.setDate(Number(dataMulta[2]))
    // dataLimiteMulta.setMonth(Number(dataMulta[1]) + 3)
    // dataLimiteMulta.setFullYear(Number(dataMulta[0]))

    // const dia = dataLimiteMulta.getDate()
    // const mes = dataLimiteMulta.getMonth() 
    // const ano = dataLimiteMulta.getFullYear()
    
    // console.log(`${dia} - ${mes} - ${ano}`)
    // console.log(typeof(ano))

    if(mes == 10){
        resp1.innerText = `Data limite do pagamento com desconto ${dia} - ${1} - ${ano + 1}`
    }else if(mes == 11){
        resp1.innerText = `Data limite do pagamento com desconto ${dia} - ${2} - ${ano + 1}`
    }else if(mes == 12){
        resp1.innerText = `Data limite do pagamento com desconto ${dia} - ${3} - ${ano + 1}`
    }else{
        resp1.innerText = `Data limite do pagamento com desconto ${dia} - ${mes + 3} - ${ano}`
        
    }
    resp2.innerText = `Valor com Desconto R$: ${valor}`
})