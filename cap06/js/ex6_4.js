/*
Nesta atividade sera focada ao botão de Inclusão e Listagem de Dados
*/

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []                             // Declaração da variavel global

frm.addEventListener("submit", (e) => {
    e.preventDefault()                          // evita o envia do formulario

    const nome = frm.inNome.value               // obtem o nome da criança apos a digitação
    const idade = Number(frm.inIdade.value) 

    criancas.push({nome, idade})                // adiciona dados ao vetor de objetos
    frm.reset()                                 // limpa os campos do form
    frm.inNome.focus()                          // posiciona no campo de formulario
    frm.btListar.dispatch(new Event("click"))   // dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    
    if(criancas.length == 0){                   // se está vazio, exibe um alerta
        alert("Não a crianças na lista")
        return
    }

    let lista = ""                              // para concatenar a lista de crianças
    
    for(const crianca of criancas){
        const {nome, idade} = crianca           // desestrutura o objeto
        lista += nome + " - " + idade + "anos \n"
    }

    resp.innerText = lista                      // exibe a Lista
})


frm.btResumir.addEventListener("click", () => {

    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return
    }

    const copia = [...criancas]                 // cria cópia do vetor criança
    copia.sort((a, b) => a.idade - b.idade)     // ordena pela idade
    let resumo = ""                             // para concatenar saída
    let aux = copia[0].idade                    // menor idade do vetor ordenado
    let nomes = []                              // para inserir nomes de cada idade

    for(const crianca of copia){
        const { nome, idade} = crianca
        if(idade == aux){                       // se é da mesma idade auxiliar
            nomes.push(nome)                    // adiciona ao vetor nomes
        }else{                                  // senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " crianças(s) - "
            resumo += ((nomes.length/copia.length)*100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade   
            nomes = []                      // o´tem a nova idade na ordem
            nomes.push(nome)

           
        }
    }

    // adiciona a ultima criança na lista
    resumo += aux + " ano(s): " + nomes.length + " crianças(s) - "
    resumo += ((nomes.length/copia.length)*100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo             // exibe a resposta
})

