/*
Prorama javascript para registrar as apostas e os nomes dentro do localstorage
*/

const frm = document.querySelector("form")                                          // frm pega dados do form
const respLista = document.querySelector("pre")                                     // insire a resposta na tag pre

frm.addEventListener("submit", (e) => {                                             // evento quando clica no submit
    e.preventDefault()

    const nome = frm.inNome.value                                                   // captura o valor do input nome
    const peso = frm.inPeso.value                                                   // captura o valor do input peso

    if(verApostaExiste(peso)){                                                      // chama a função para verificar se peso já foi preenchido
        alert("Alguem já apostou este peso, informe outro...")                      // se o peso digitado já existir na localstorage ele não salva ele e pede para que seja digitado outro peso no input peso 
        frm.inPeso.focus()                                                          // função focus() para focar no input peso
        return                                                                      // programa para neste if ate o usúario digitar outro peso
    }

    if(localStorage.getItem("melenciaNome")){                                       // se houver dados em localStorage  
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome      // está variavel vira um lista por conta do SPLIT, pega os valores já exixtentes do localstorage separados por " ; " e adiona a o valor da variavel nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso      // está variavel vira um lista por conta do SPLIT, pega os valores já exixtentes do localstorage separados por " ; " e adiona a o valor da variavel peso
        localStorage.setItem("melanciaNome", melanciaNome)                          // logo em seguida atualiza o local storage, CHAVE --> melanciaNome e o VALOR --> e a variavel melanciaNome que e uma lista
        localStorage.setItem("melanciaPeso", melanciaPeso)                          // logo em seguida atualiza o local storage, CHAVE --> melanciaNome e o VALOR --> e a variavel melanciaPeso que e uma lista
    }else{
        localStorage.setItem("melanciaNome", nome)                                  // caso não acha valores no localStorage.getItem("melenciaNome")
        localStorage.setItem("melanciaPeso", peso)                                  // adiciona CHAVE->"melanciaNome" e "melanciaPeso" para cada um seus valores nome e peso
    }

    mostrarApostas()                                                                 // chama função que mostra as apostas já salvas
    frm.reset()                                                                      // limpa form
    frm.inNome.focus()                                                               // joga o foco (cursor) no campo inNome

    const verApostaExiste = (peso) =>{                                               // função que verifica se já existe uma aposta salva
        if(localStorage.getItem("melanciaPeso")){                                    // se existir dados no local storage 
            const pesos = localStorage.getItem("melanciaPeso").split(";")            // cria variavel peso que vira uma lista com os valores de "melanciaPeso" separadas por " ; "
            return pesos.includes(peso.toString())                                   // retorna um valor booleano, includes() --> verifica se parametro peso exisir na lista pesos
        }else{ 
            return false                                                             // falso se ainda não houver dados no localStorage
        }
    }

    const mostrarApostas = () =>{

        if(!localStorage.getItem("melanciaNome")){                                   // caso retorne false --> ! --> faz ele virar true e o if inicializado
            respLista.innerText = ""                                                // tag pre fica vazia
            return                                                                  // return para a execução da função 
        }

        const nomes = localStorage.getItem("melanciaNome").split(";")               // cria uma lista com os valores que estão no localStorage - CHAVE --> melanciaNome
        const pesos = localStorage.getItem("melanciaPeso").split(";")               // cria uma lista com os valores que estão no localStorage - CHAVE --> melanciaPeso

        let linhas = ""                                                             // variavel que ajudara para a exibição 

        for(let i = 0; i < nomes.length; i++){                                      // for para iterar nas listas nomes e pesos
            linhas += nomes[i] + "-" + pesos[i] + "gr \n"                           // varivel linhas recebe os valores das lista nomes e pesos a cada iteração e salva separados por \n
        }
        respLista.innerText = linhas                                                // todos os nomes e pesos serão mostrados no tag pre
    }
    window.addEventListener("load", mostrarApostas)                                 // sempre que o site for carregado a site irá executar está função
})

frm.btVencedor.addEventListener("click", ()=>{                                      // função para encontrar o ganhador do palpite
    if(!localStorage.getItem("melanciaNome")){                                      // if de controle, verifica se há valores dentro do localstorage, se for false !--> a negação transforme em true
        alert("Não há apostas cadastradas")                                         // mostra o alerta na tela
        return                                                                      // para a função e retorna
    }
    const pesoCorreto = Number(prompt("Qual e o peso correto da melancia?"))        // prompt para inserir o valor real da melancia

    if(pesoCorreto == 0 || isNaN(pesoCorreto)){                                     // if de controle, caso nada seja digitado no prompt ou diferente de Numbrer
        return                                                                      // return encerra a função
    }
    const nomes = localStorage.getItem("melanciaNome").split(";")                   // cria uma lista com os valores do LocalStorage tanto de nome e peso com o auxilio do split 
    const pesos = localStorage.getItem("melanciaPeso").split(";")                   // lista criada tanto para nome e peso

    let vencedorNome = nomes[0]                                                     // vencedorNome = nome[0] recebe o primeiro valor da lista nome
    let vencedorPeso = Number(pesos[0])                                             // vencedorPeso = Number(peso[0]) recebe o prmneiro valor da lista peso

    for(let i = 1; i < nomes.length; i++){                                          // for para no tamanho das lista nomes
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)                    // difVencedor recebe o valor da subtração de "vencedorPeso - pesoCorreto" do primeiro apostador, já vencedorPeso[0] está se referenciando ao primeiro aspotador
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)                  // difAposta recebe o valor da subtração de "Number(peso[i]) - pesoCorreto" este referencia ao proximo aposatdor, já que i --> tem valor de 1, e 1 referencia ao segundo apostador da lista
            
        if(difAposta < difVencedor){                                                // verifica se o valor de difAposta e menor que difVencedor
            vencedorNome = nomes[i]                                                 // caso for menor(TRUE) atualiza as variavel vencedorNome e vencedorPeso
            vencedorPeso = Number(pesos[i])                                         // que recebem o valor de i que corresponde ao loop onde i esta sendo refenciado, já que o for e um loop e i sempre muda, para 1, 2, 3 e i sempre tem um valor diferente 
        }
    }
     let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"               // variavel que irá mostrar o vencedor
     mensagem += "\n----------------------------------------------"                 // separado por \n que pula uma linha para baixo
     mensagem += "\nVencedor: " + vencedorNome                                      // concatena a variavel vencedorNome
     mensagem += "\nAposta: " + vencedorPeso + "gr"                                 // concatena a variavel vencedorPeso
    alert(mensagem)                                                                 // alert --. exibe a variavel mensagem com todos as variaveis atribuidas a ele
})
frm.btLimpar.addEventListener("click", ()=>{                                        // função para deletar os dados que estão dentro do LocalStorage

    if(confirm("Confirma a exclusão das apostas? ")){                               // confirma espera o click para deletar tudo
        localStorage.removeItem("melanciaNome")                                     // metodo removeItem deleta "melanciaNome"
        localStorage.removeItem("melanciaPeso")                                     // metodo removeItem deleta "melanciaPeso"
        mostrarApostas()                                                            // mostra a aposta vazia
    }
})




