const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit",(e) =>{
    e.preventDefault();

    const fruta = frm.inFruta.value.toUpperCase();          // Conteudo do campo em maiusculas
    let resposta = "";

    for(const letra of fruta){                              // Percorre todo os caracteres da letra
        if(letra == fruta.charAt(0)){                       // se a letra igual a letra inicial da string...
            resposta += fruta.charAt(0);                    // adiciona a letra inicial
        }else{
            resposta += "_";                                // ADiciona o sublinhado
        }
    };
    resp.innerText = resposta;                              // exibe a resposta               
    frm.inFruta.value = "*".repeat(fruta.length);           // Preenche com "*", conforme o tamanho
});