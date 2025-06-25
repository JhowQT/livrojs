const frm = document.querySelector("form");                                     // cria referencia a tag <form>

frm.addEventListener("submit", (e) =>{
    e.preventDefault();                                                         // evita o envio do form

    const palavra = frm.inPalavra.value.trim();                                 // captura o valor do input e o metodo .trim() remove os espaços tanto no inicio como no final na palavra
    const dica = frm.inDica.value;                                              // captura o valor do input com id #inDica

    if(palavra.includes(" ")){                                                  // metodo .includes() verifica se existe string " " vazia detro da palavra
        alert(`Informe uma palavra (válida sem espaços no meio da palavra ${palavra})`)// alert() para orienatar o usuario
        frm.inPalavra.focus();                                                  // foco para o input 
        return;                                                                 // return para encerrar o bloco de codigo
    }

    if(localStorage.getItem("jogoPalavra")){                                    // verifica se existe dados gravados dentro so localStorage com essa chave e retorna um valor booleano
        localStorage.setItem("jogoPalavra",                                     // uso setItem para acrescentar a chave o novo valor
        localStorage.getItem("jogoPalavra") + ";" + palavra);                   // setItem("chave", "valor") --> chave="jogoPalavra", valor="" aqui e a dinamica, onde ele pega o valor que já existe com o uso do getItem e salva separando com o ";" e concatenando com + "palavra"
                                                                                // isso salva a nova palavra con localStorage usando o setItem
        localStorage.setItem("jogoDica", 
        localStorage.getItem("jogoDica") + ";" + dica);                         // aqui se aplica a mesma logica
    }else{                                                                      // caso não houver nenhum valor dentro do localStorage entra neste bloco de codigo
        localStorage.setItem("jogoPalavra", palavra);                           // setItem() --> sintaxe ("chave","valor")
        localStorage.setItem("jogoDica", dica);                                 // mesma logica
    }                                                                           // 

    if(localStorage.getItem("jogoPalavra")){                                    // aqui verifica a existencia de valores dentro do localStorage
        alert(`OK! Palavra ${palavra} Cadastrada com Sucesso`);                 // caso existe retorna um alert() ja tratado
    }   

    frm.reset();                                                                // reseta o form
    frm.inPalavra.focus();                                                      // foca no input com o id #inPalavra
});


