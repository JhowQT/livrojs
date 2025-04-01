const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano)                       // chama a função e atribui 
    const entrada = calcularEntrada(preco, classificacao)               // ...retorno as variaveis
    const parcela = (preco - entrada) / 10                              // usa retorno da função para cálculo

    resp1.innerText = modelo + " - " + classificacao                    // exibe as respostas
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$ ${parcela.toFixed(2)}`

})

const classificarVeiculo = (ano) =>{
    const anoAtual = new Date.getFullYear()                             // obtém o ano atual
    let classif
    if(ano == anoAtual){
        classif = "Novo"
    }else if(ano == anoAtual - 1 || ano == anoAtual - 2){
        classif = "Seminovo"
    }else{
        classif = "Usado"
    }
    return classif                                                      // retorna o valor para a variavel classif
} 

const calcularEntrada = (valor, status) =>{         
    status == "Novo"? valor * 0.5 : valor * 0.3                         //
}
