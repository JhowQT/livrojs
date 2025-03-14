const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const funcionario = frm.inNome.value;
    const partes = funcionario.split(" ");
    let email = " "                             // para concatenar as strings                                             
    const tamanhoDaLista = partes.length
    for(let i = 0; i < tamanhoDaLista - 1; i++){
        email += partes[i].charAt(0)
    };
    email += partes[tamanhoDaLista - 1] + "@empresa.com.br"

    resp.innerText = `E-mail: ${email.toLocaleLowerCase()}`

});