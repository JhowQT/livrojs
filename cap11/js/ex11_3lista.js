const tbPalavras  = document.querySelector("table");                                // faz referencia a tag <table>
const ckMostrar = document.querySelector("input[type='checkbox']");                 // faz referencia ao checkbox

const montarTabela = () =>{                                                         // função que monta a tabela

    if(localStorage.getItem("jogoPalavra")){                                        // if que verifica se existe um valor dentro do localStorage

        const palavras = localStorage.getItem("jogoPalavra").split(";");            // variavel que recebe os valores do localStorage em forma de array
        const dicas = localStorage.getItem("jogoDica").split(";");                  // a mesma coisa aqui

        for(let i = 0; i < palavras.length; i++){                                   // for para iterar encima da quantidade itens dentro do array palavras
            
            const linha = tbPalavras.insertRow(-1);                                 // insere uma nova linha dentro da tabela, (-1) --> serve para inserir sempre no final da tabela
            const col1 = linha.insertCell(0);                                       // na linha da tabela existe 3 celulas 0, 1, 2, representam cada uma delas uma das celulas, insere uma celula no indice 0
            const col2 = linha.insertCell(1);                                       // insere uma celula no indice 1 -> que representa uma tag td
            const col3 = linha.insertCell(2);                                       // insere uma celula no indice 2 -> que representa uma tag td

            col1.innerText = palavras[i];                                           // valor que estarão na celula
            col2.innerText = dicas[i];                                              // valor que estera na celula
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";       // insere um valor no objeto criado pelo DOM, a tag <td> foi crida ela é um objeto completo HTML, e nela pode ser inserido este valor tag <i> com classe propria
        }
    }    
};

ckMostrar.addEventListener("change", () =>{                                         // evento que é ativado quando clicamos no checkbox
    ckMostrar.checked ? montarTabela() : window.location.reload();                  // ternario que ira montar a tabela se TRUE e reler a pagina se FALSE
});

tbPalavras.addEventListener("click", (e) =>{                                        // evento que e ativado quando clicamos dentro da tag <table>
                                                                                    // (e) --> ele não e nada, porém quando algo e clicado dentro deste bloco o (e) guarda e assume o valor de quem foi clicado
    if(e.target.classList.contains("exclui")){                                      // cliacamos em algo, (e) assume o valor desse algo, target() retorna o HTML desse algo se ele possuir e ussamos classList
                                                                                    // para saber quais classes esse algo possui, classList tem sua propria sintaxe ela chama contains() que verifica a existencia de uma determinada classe dentro da tag HTML
                                                                                    // e este if() quer verificar se essa classe existe dentro desse algo, se TRUE ele entra aqui
        const palavra = e.target.parentElement.parentElement.children[0].innerText; // target() -> aponta ao elemento que foi clicado
                                                                                    // parentElemente() some para a tag pai
                                                                                    // children() -> serve para reunir em array todas as tags que estão dentro da tag pai
                                                                                    // innerText() -> acessa ao texto que esta na tag


        if(confirm(`Confirma a Exclusão da Palavra: "${palavra}"?`)){               // If insire pop up na tela que espera um click no cofirm ou cancel
            
            e.target.parentElement.parentElement.remove();                          // acessa a tag <tr> que e a linha que contem as informações da, palavra, dicas e ações 
                                                                                    // remove() metodo usado para remover a linha toda da tabela
            localStorage.removeItem("jogoPalavra");                                 // acessa o localStorage e deleta todas as informações desta chave
            localStorage.removeItem("jogoDica");                                    //  a mesma coisa aqui

            const palavras = [];                                                    // array para ser usado na logica para as novas informações
            const dicas = [];                                                       // a mesma coisa aqui, porém para as dicas

            for(let i = 1; i < tbPalavras.rows.length; i++){                        // for para iterar sobre as linhas existentes dentro da table, tbPalavras-> faz referencias a tag <table>
                                                                                    // rows() retorna um HtmlCollection com as as linhas--> tags <tr> dentro da <table>
                                                                                    // length() para saber o tamanho do array
                palavras.push(tbPalavras.rows[i].cells[0].innerText);               // adiciona um valor ao array palavras -> imagine navegar em uma matriz, tbPalavras -> referencia a tabela no HTML -> rows lista todas as linhas
                                                                                    // cells() lista todas as celulas dentro da linha, innerText() captura o valor do texto
                                                                                    // tabele ---> linhas --> celula --> valor que a celula tem
                                                                                    // 
                dicas.push(tbPalavras.rows[i].cells[1].innerText);                  // a mesma coisa aqui inserir( tabela --> lista de linhas[indice] --> lista de celulas[indice] --> valor que essa celula possui )
            }

            localStorage.setItem("jogoPalavra", palavras.join(";"));                // salvo no localStorage()-> usando o setItem chave->("jogoPalavra"), valor -> palavra, join(";") ele ira pegar a lista
                                                                                    // palavras[], todos os valores serão unidos em uma só string polo join(";") ["papa", "papi"]
                                                                                    // join(";") --> "papa;papi", retorna sempre ums String das junções dos valores do array separados pelo valor que será passado pelo join(";")
            localStorage.setItem("jogoDica", dicas.join(";"));                      // a mesma coisa aqui, e depois salvar isso no localStorage() com o setItem()
        }
    }
});




