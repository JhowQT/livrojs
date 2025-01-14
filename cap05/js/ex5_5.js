const frm = document.querySelector("form")      //obtém elementos da página
const resp1 = document.querySelector("#inResp1")
const resp2 = document.querySelector("#inResp2")

let resposta = ""       //string com a resposta a ser exibida
let numContas = 0       //inicializa o contador 
let valTotal = 0        //e o acumulador (variáveis globais)

frm.addEventListener("submit", (e) => {     //"escuta" o evento sumbit do form
    e.preventDefault()      //evita o envio do form

    const descricao = frm.inDescricao.value     //obtém os dados da conta
    const valor = Number(frm.inValor.value)

    numContas++     //adiciona valores ao contador e acumulador
    valTotal = valTotal + valor     //Ou: valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    
    resp1.innerText = `${resposta} ---------------------------------`
    resp2.innerText = `${numContas} - Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""      //limpa campo do form
    frm.inValor.value = ""
    frm.inDescricao.focus()         //posiciona no campo inDescricao do form

})


