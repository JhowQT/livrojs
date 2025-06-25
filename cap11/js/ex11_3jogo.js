const frm = document.querySelector("form");                                                             // faz referencia a tag <form>
const respPalavra = document.querySelector("#outPalavra");                                              // faz referencia a tag <span>
const respErros = document.querySelector("#outErros");                                                  // faz referencia a tag <span>
const respDica = document.querySelector("#outDica");                                                    // faz referencia a tag <span>
const respChances = document.querySelector("#outChances");                                              // faz referencia a tag <span>
const respMensagemFinal = document.querySelector("#outMensagemFinal");                                  // faz referencia a tag <h2>
const imgStatus = document.querySelector("img");                                                        // faz referencia a tag <img>

let palavraSorteda;                                                                                     // variavel que ajuda a logica 
let dicaSorteada;                                                                                       // variavel que ajuda a logica

window.addEventListener("load", () => {                                                                 // metodo que e ativado quando o programa e lido

    if(!localStorage.getItem("jogoPalavra")){                                                           // Verifica se existe algo salvo dentro do localStorage, --> ! inverto o valor booleano
        alert("Cadastre palavras para jogar");                                                          // alert para indicar o cadastro de palavras para o programa
        frm.inLetra.disabled = true;                                                                    // desabilita este botão
        frm.btJogar.disabled = true;                                                                    // desabilita este botão
        frm.btVerDica.disabled = true;                                                                  // desalita este botão
    }

    const palavras = localStorage.getItem("jogoPalavra").split(";");                                    // Obtem os valores do localStorage em forma de array
    const dicas = localStorage.getItem("jogoDica").split(";");                                          // Obtem os valores do localStorage em forma de array

    const tam = palavras.length;                                                                        // Obtem o valor do tamanho do array palavra

    const numAleatorio = Math.floor(Math.random() * tam);                                               // gera um numero aleatorio, usando uma logica simples, random() * tam  gera um numero quebrado sempre menor que a variavel (tam)
                                                                                                        // Math.floor e responsavel por ingonar as decimais e devolver um numero do tipo inteiro
    palavraSorteda = palavras[numAleatorio].toUpperCase();                                              // atribui para esta variavel, usando o numAleatorio como indice de busca para trazer o valor correspondente dele na lista da variavel (palavra)
    dicaSorteada = dicas[numAleatorio];                                                                 // a mesma coisa, pórem na busca da lista da variavel (dicas)
    let novaPalavra = "";                                                                               // variavel para ajudar na formatação

    for(const letra of palavraSorteda){                                                                 // pega o valor de palavraSorteada e itera sibre ela

        if(letra == palavraSorteda.charAt(0)){                                                          // condição que verifica se a letra que está sendo iterada e iguala  1 letra da variavel palavraSorteada.charAt()
            novaPalavra += palavraSorteda.charAt(0);                                                    // se TRUE ele concatena o valor atual da variavel novaPalavra com a primeira letra da variavel palavraSorteda.charAt()
        }else{
            novaPalavra += "_";                                                                         // se FALSE ele concatena "_" está string ao valor atual da variavel novaPalavra
        }
    }
    respPalavra.innerText = novaPalavra;                                                                // insere o valor da variavel novaPalavra a variavel respPalavra no HTML pelo metodo innerText
});

frm.btVerDica.addEventListener("click", ()=>{                                                           // metodo ativado quando clicamos dentro do botão com id -> "btVerDica"

    if(respErros.innerText.includes("*")){                                                              // verifica se dentro de respErros existe esta string("*")
        alert("Você já solicitou a dica...");                                                           // se TRUE, exibe este alert na tela do usuario
        frm.inLetra.focus();                                                                            // poe um foco no id inLetra
        return;                                                                                         // para este bloco de codigo e faz o retorno
    }                                                                                                   // se false ele continua este bloco de codigo

    respDica.innerText = " * " + dicaSorteada;                                                          // atribui o valor de dicaSorteda a variavel respDica e insere ao HTML via metodo innerText
    respErros.innerText += "*";                                                                         // atrubui este valor a variavel respErros -> ("*") e ao mesmo tempo inclui no HTML

    const chances = Number(respChances.innerText) - 1;                                                  // pega o valor dp HTML da variavel respChances e subtrai menos 1 --> (-1) 
    respChances.innerText = chances;                                                                    // atrubui o valor de chances para a variavel respChances e atrubui ao HTML

    trocarStatus(chances);                                                                              // atualiza o caminho da imagem usando este metodo trocaStatus()
    verificaFim();                                                                                      // metodo usado para verificar se as chances e igual a 0 e para saber se a o jogador acerto  a palavra
    frm.inLetra.focus();                                                                                // poe foco no id inLetra
});                                                                                                     // 

const trocarStatus = (num) => {                                                                         // arrow function para trocar de imagen via DOM (num) e serve como parametro
    if(num > 0) imgStatus.src = `img/status${num}.jpg`;                                                 // condição que requer que o parametro sempre seja maior que 0 para entrar neste bloco de codigo
};                                                                                                      // troca o caminho do src de imgStatus usando i parametro que foi utilizado

frm.addEventListener("submit", e =>{                                                                    // metodo que e ativado quando clicamos no subnit
    e.preventDefault()                                                                                  // evita o envio forms

    const letra = frm.inLetra.value.toUpperCase();                                                      // adquiri o valor do input com id inLetra e usa o toUpperCase para transformar esse valor em Maiusculo

    let erros = respErros.innerText;                                                                    // esta variavel adquiri o valor que esta no HTML desta da variavel respErros
    let palavra = respPalavra.innerText;                                                                // esta variavel adquiri o valor que esta no HTML desta da variavel respPalavra

    if(erros.includes(letra)){                                                                          // verifica se letras esta dentro de erros
        alert("Você já passou esta letra");                                                             // se TRUE mostra este Alert
        frm.inLetra.focus();                                                                            // foca em inLetra
        return;                                                                                         // para esta função e retorna
    }                                                                                                   // se FALSE continua com bloco de codigo deste arrow funtion

    if(palavraSorteda.includes(letra)){                                                                 // verifica se letra esta dentro da variavel palavraSorteada
        let novaPalavra = "";                                                                           // ajudara a concatenar a resposta    

        for(let i = 0; i < palavraSorteda.length; i++){                                                 // itera sobre o tamanho de palavraSorteada
                                                                                                        // verifica se a 1° strig via charAt(i) e igual a letra
            if(palavraSorteda.charAt(i) == letra){                                                      //  
                novaPalavra += letra;                                                                   // se TRUE novaPalavra recebe letra cada ves que for TRUE
            }else{                                                                                      // se FALSE
                novaPalavra += palavra.charAt(i);                                                       // novaPalavra adquiri a string de palavra usando o valor do i palavra.charAt(i)
            }
        }
        respPalavra.innerText = novaPalavra                                                             // novaPalavra e inserido no HTML     
    }else{      
        respErros.innerText += letra;                                                                   // inclui letra no HTML via DOM em respErros
        const chances = Number(respChances.innerText) - 1;                                              // pega o valor de respChances - 1 já que ele erro
        respChances.innerText = chances;                                                                // atualiza respChances com o valor de chances

        trocarStatus(chances);                                                                          // metodo que atualiza a imagem
    }
    verificaFim();                                                                                      // verifica as chances e se a palavra e igual a sorteada
    frm.inLetra.value ="";                                                                              // deixa em branco o inLetra
    frm.inLetra.focus();                                                                                // foco no inLetra
});

const verificaFim =()=>{                                                                                // arrow funtion sem retorno
    const chances = Number(respChances.innerText);                                                      // esta variavel adquire o valor que esta dentro do HTML de respChances

    if(chances == 0){                                                                                   // se chances for 0
        respMensagemFinal.className = "display-3 text-danger";                                          // muda a classe de respMensagemFinal para esta
        respMensagemFinal.innerText = `Ah...é ${palavraSorteda}. Você Perdeu!`                          // atrubui este texto para essa variavel via DOM
    }else if(respPalavra.innerText == palavraSorteda){                                                  // se estas duas variavel tem o mesmo valor entra neste bloco de codigo
        respMensagemFinal.className = "display-3 text-primary";                                         // muda a classe para esta nova
        respMensagemFinal.innerText = "Parabens!! Você Ganhou.";                                        // Adquiri este novo texto
        trocarStatus(4);                                                                                // troca o status para 4
        concluirJogo();                                                                                 // usa esta função para desailitar os botões
    }
}

const concluirJogo = () =>{                                                                             // 
    respDica.innerText = "* Clique no Botão 'Iniciar Jogo' para jogar novamente";                       // esta variavel adquiri este texto via DOM no HTML
    frm.inLetra.disabled = true;                                                                        // desabilita esta variavel
    frm.btJogar.disabled = true;                                                                        // desabilita esta variavel
    frm.btVerDica.disabled = true;                                                                      // desabilita esta variavel
}
