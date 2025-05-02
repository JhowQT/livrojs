const frm = document.querySelector("form")                                          // referencia ao a tag FORM
const tbFilmes = document.querySelector("table")                                    // referecnia a tag TABLE

frm.addEventListener("submit", (e)=>{                                               // arrow function para capturar os valores dos inputs
   e.preventDefault()
    
    const titulo = frm.inTitulo.value                                               // recebe o valor do input inTitulo
    const genero = frm.inGenero.value                                               // recebe o valor do input inGenero

    inserirLinha(titulo,genero)                                                     // funcões a serem criadas para inserir as linhas e celulas 
    gravarFilme(titulo,genero)                                                      // funções a serem criadas para gravar os textos nas celulas criadas

    frm.reset()                                                                     // reset da página quando a click for clicado
    frm.inTitulo.focus()                                                            // a página ira focar na tag que tem esse id "inTitulo"
});
const inserirLinha = (titulo, genero) =>{                                           // criação da funções inserir linha
    const linha = tbFilmes.insertRow(-1)                                            // varivel linha que recebe insertRow() --> metodo que cria uma tag <tr> dentro da tag <table> e está é refenciada a partir da const tbFilmes

    const col1 = linha.insertCell(0)                                                // insertCell() --> metodo que criar uma tag <td> que e uma coluna dentro da tag <tr>
    const col2 = linha.insertCell(1)                                                // insertCell() --> metodo que criar uma tag <td> que e uma coluna dentro da tag <tr>
    const col3 = linha.insertCell(2)                                                // insertCell() --> metodo que criar uma tag <td> que e uma coluna dentro da tag <tr>

    col1.innerText = titulo                                                         // metodo innerText vai atribuir os argumentos que foram atribuidos no parametro "titulo" para a variavel col1
    col2.innerText = genero                                                         // metodo innerText vai atribuir os argumentos que foram atribuidos no parametro "genero" para a variavel col2
    col3.innerHTML = "<i class='exclui' tilte='Excluir'>&#10008</i>"                // cria a tag <i> com class e title definidas para a atribuição de uma figura dentro da tag <td>
};

const gravarFilme= (titulo, genero) => {                                            // criação da função gravar filme com dois parâmetros - titulo, genero - 
    if(localStorage.getItem("filmesTitulo")){                                       // verifica se há algo slavo dentro do localStorage, True se houver e False se não houver nada
        
                                                                                    // Sé a comdição for verdadeira entra neste bloco de código
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo    // captura os valores do localStorage e concatena com o argumento de "titulo" separado por " ; " para está variavel
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero    // captura os valores do localStorage e concatena com o argumento de "genero" separado por " ; " para está variavel
        localStorage.setItem("filmesTitulo", filmesTitulo)                          // guarda a variavel para dentro do localStorage com o metodo setItem() "filmesTitulo" --> chave, varivel filmesTitulo e o valor
        localStorage.setItem("filmesGenero", filmesGenero)                          // guarda a variavel para dentro do localStorage com o metodo setItem() "filmesGenero" --> chave, varivel filmesGenero e o valor
    }else{

                                                                                    // Sé a condição for falsa entramos neste bloco de código
        localStorage.setItem("filmesTitulo", titulo)                                // metodo setItem() guarda a chave "filmesTiulo" com argumento do tiulo como valor
        localStorage.setItem("filmesGenero", genero)                                // metodo setItem() guarda a chave "filmesGenero" com argumento do genero como valor
    }
};

window.addEventListener("load", () => {                                             // metodo que e ativado assim que a página é lida

    if(localStorage.getItem("filmesTitulo")){                                       // caso o retorno for verdadeiro  

        const titulos = localStorage.getItem("filmesTitulo").split(";");            // o metodo getItem() vai alocar os valores de "filmesTitulo" para a variavel titulos que e um array
        const generos = localStorage.getItem("filmesGenero").split(";");            // o metodo getItem() vai alocar os valores de "filmesGenero" para a variavel generos que e um array

        for(let i = 0; i < titulos.length; i++){                                    // for para iteram sobre as variaveis titulos e generos
        inserirLinha(titulos[i], generos[i])                                        // usa a função inserirLinha() para pegar os valores dos arrays a partir da referencia do i do for
        }
    }
})

tbFilmes.addEventListener("click", (e)=>{                                           // Assionado ao clicar em qualquer tag dentro da tag <table>
    
    if(e.target.classList.contains("exclui")){                                      // Verifica se a tag que for clicado tem a class com o nome de "exclui"
        const titulo = e.target.parentElement.parentElement.children[0].innerText   // e.target -> referenciam a tag <i>, metodo parentElement() sobe uma tag acima do filho, metodo children() retorna todos itens dentro da tag pai, innerText() retorna o texto referenciado

        if(confirm(`Confirma Exclusão do Filme "${titulo}"`)){                      // a variavel ${titulo} contem o texto dentro de tag <td> para mostar na tela
            e.target.parentElement.parentElement.remove()                           // <i> e referenciado por e.target, parentElement --> sai de <i> para <td><i></td>, o segundo parentElement sai para <td><i></td> para --> <tr><td><i></td></tr>
                                                                                    // e o metodo remove() exclui a tag <tr> e todos os seus filhos

            localStorage.removeItem("filmesTitulo")                                 // exclui do localStorage a chave e seu valor
            localStorage.removeItem("filmesGenero")                                 // exclui do localStorage a chave e seu valor

            for(let i = 1; i < tbFilmes.rows.length; i++){                          // metodo rows() lista a quantidade de tags <tr> dentro da tag <table>
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText               // iteração i representa a lista de <tr>, metodo cells() a lista de <td> ou <td>
                const auxGenero = tbFilmes.rows[i].cells[1].innerText               // rows[i] --> a linha existente, cells[0] --> as celulas do titulo e genero, as tags <td>
                gravarFilme(auxTitulo, auxGenero)                                   // usando o metodo gravarFilme para salvar os filmes no localStorage
            }
        }
    }
})


