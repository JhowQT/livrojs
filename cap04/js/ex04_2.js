    const frm = document.querySelector("form"); //cria referencia ao form e o elemento 
    const resp = document.querySelector("h3");  //onde será exibida a resposta

    frm.addEventListener("submit", (e) => { //ouvinte de evento, acionado quando o botão submit for clicado
        e.preventDefault()                  // evita o envio do form

        const nome = frm.inNome.value              // Obtem os
        const masculino = frm.inMasculino.checked  // Valores do 
        const altura = Number(frm.inAltura.value)  // Form

        /*let peso                             //Declara a variavel
        if (masculino) {                     //se masculino(ou, if masculino == true)
            peso = 22 * Math.pow(altura, 2)  //Math pow wlwva ao quadrado
        } else {
            peso = 21 * Math.pow(altura, 2)
        }*/
        const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

        //apresenta a resposta (altera o centeudo do elemento h3 da página)
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
    });

    frm.addEventListener("reset", () => {
        resp.innerText = ""
    });