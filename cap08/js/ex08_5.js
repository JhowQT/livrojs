const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto){
    console.log
    console.log(texto)
    console.log("=".repeat(40))
}

do{
    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Destaque")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Escolha uma Opção: "))
    if(opcao == 1){
        incluir()
    }else if(opcao == 2){
        listar()
    }else if(opcao == 3){
        pesquisar()
    }else if(opcao == 4){
        calcularMedia()
    }else{
        break
    }
}while (true)

function incluir(){
    titulo("===< Inclusão de Vinhos >===")

    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preço R$: "))

    vinhos.push({marca, tipo, preco})
    console.log('OK! Vinho cadastro com sucesso ')
}

function listar(){
    titulo("===< Lista de Vinhos Cadatrados >===")

    console.log("Marca..........................Tipo..........................Preço R$")
    for(const vinho of vinhos){
        console.log(`${vinho.marca.padEnd(30)} ${vinho.tipo.padEnd(27)}` + `${vinho.preco.toFixed(2).padStart(9)}`)
    }
}

function pesquisar(){
    console.log("===< Pesquisa  Por Tipo de Vinho >===")

    const pesq = prompt("Tipo: ")
    let contador = 0
    console.log("Marca..........................Tipo..........................Preço R$")
    
    for(const vinho of vinhos){
        if(vinho.tipo.toUpperCase().includes(pesq.toLocaleUpperCase())){
            console.log(`${vinho.marca.padEnd(30)} ${vinho.tipo.padEnd(27)}` + `${vinho.preco.toFixed(2).padStart(9)}`)
        contador++
        }
    }
    if(contador == 0){
        console.loh(`Obs.: Não há vinhos cadastrados do tipo "${tipo}"`)
    }
}

function calcularMedia(){
    titulo("===< Média e Destaques do Cadastros de Vinhos >===")

    const num = vinhos.length

    if(num == 0){
        console.log(`Obs. Não a vinhos cadastrados`)
        return
    }

    let total = 0

    for(const vinho of vinhos){
        total+= vinho.preco
    }

    const media = total/num
    const vinhos2 = [...vinhos]
    vinhos2.sort((a, b) => a.preco - b.preco)

    const menor = vinhos2[0]
    const maior = vinhos2[num - 1]

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${menor.marca}`)
}
