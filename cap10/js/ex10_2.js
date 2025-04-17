const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () =>{

    const num1_00 = Math.ceil(Math.random() * 5)                                // cria números aleatorios de 1 a 5   
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    const alt1_00 = "Moedas de real"                                            // Texto de descriçã oque será usado no alt
    const alt0_50 = "Moedas de Cinquenta Centavos"
    const alt0_25 = "Moedas de Vinte e Cinco Centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00")                      // chamada para função que cria moedas
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")

})
const criarMoedas = (num, moeda, textoAlt, classe) =>{                          // criação da função que vai criar as moedas
    
    for(let i = 1; i <= num; i++){                                              // for que ira percorrer pela quantidades de númerops criados
        const novaMoeda = document.createElement("img")                         // criação da tag img
        novaMoeda.src ="./img/" + moeda                                         // para está tag será atribuida o scr --> ./img/ junto com o nome do arquivo correspondente a imagem
        novaMoeda.textAlt = textoAlt                                            // o atributo alt e inserido a tag referenciando a variavel akt já criada 
        novaMoeda.className = classe                                            // para cada moeda e inserida uma classe diferente
        dvMoedas.appendChild(novaMoeda)                                         // logo em seguida a variavel e atribuida para dvMoedas com appendChild
    }
    const br = document.createElement("br")                                     // Criace uma tag br para ajuda na estilização das moedas 
    dvMoedas.appendChild(br)
}
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const soma = Number(frm.inSoma.value)                                       // captura o valor do input inSoma
    const moedas = dvMoedas.querySelectorAll("img")                             // lsitagem de quantas tags img existem no html atraves do querySelectoAll()
    let totalMoedas = 0                                                         // variavel auxiliar para a soma 

    for(const moeda of moedas){                                                 // uso do for of para apenas percorrer nos valores das tags img
        if(moeda.className == "moeda1-00"){                                     // caso encontre uma tag com está classe soma-se mais 1 a variavel totalMoedas
            totalMoedas += 1
        }else if(moeda.className == "moeda0-50"){
            totalMoedas += 0.5                                                  // se está classe existir soma-se mias 0.5
        }else if(moeda.className == "moeda0-25"){
            totalMoedas += 0.25                                                 // para esta soma-se 0.25
        }else{
            totalMoedas += 0.1                                                  // está soma-se 0
        }
    }

    const div = document.createElement("div")                                   // cria uma tag div
    const h3 = document.createElement("h3")                                     // cria uma tag h3

    let mensagem                                                                // variavel para auxiliar na formatação do texto

    if(soma == totalMoedas.toFixed(2)){                                         // compara o valor da entrada do input com o totalMoedas
        div.className = "alert alert-success"                                   // se for true atribui está classe a variavel div    
        mensagem = "Parabens!! Você Acertou"                                    // atribui este texto para a variavel mensagem
    }else{
        div.className = "alert alert-danger"                                    // se for true atribui está classe a variavel div  
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`      // atribui este texto para a variavel mensagem
    }

    const texto = document.createTextNode(mensagem)                             // cria um texto para ser inserido a uma tag
    h3.appendChild(texto)                                                       // h3 recebe a variavel texto
    div.appendChild(h3)                                                         // div recebe h3
    dvMoedas.appendChild(div)                                                   // dvMoedas recebe div

    frm.submit.disabled = true                                                  // desabilita o submit do input        
})
frm.addEventListener("reset", () =>{
    window.location.reload()                                                    // AO clica no input com o type reset a página e recarregada
})

