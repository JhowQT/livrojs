const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nome = frm.inNome.value.trim();
                                                    // A negação serve para comparar a AFIRMAÇÂO do metodo INCLUEDES se existe => "" na variavel NOME
    if(!nome.includes(" ")){                        // afirmações se invertem FALSE => TRUE, TRUE => FALSE
        alert("Informe o nome completo")
        return
    }
    const priEspaco = nome.indexOf(" ");             // posicão do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ");         // posição do ultimo espaço

    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);
    resp.innerText = `Crachá: ${cracha}`

});