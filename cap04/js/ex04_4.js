    const frm = document.querySelector("form"); //cria referencia ao form e o elemento 
    const resp = document.querySelector("h3");  //onde será exibida a resposta

    frm.addEventListener("submit", (e) => { //ouvinte de evento, acionado quando o botão submit for clicado
        e.preventDefault()                  // evita o envio do form

        const horaBrasil = Number(frm.inHoraBrasil.value);
        let horaFranca = horaBrasil + 5;
        if (horaFranca > 24 ) {
            horaFranca = horaFranca - 24
        }

        resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
    });
