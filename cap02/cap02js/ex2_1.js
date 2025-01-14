// Cria referencia ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um evento "ouvinte" de evento, acionando quando o botão sumbit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value       //ontém o nome digitado no form
    resp.innerText = `Ola ${nome}`      //exibe a resposta do programa
    e.preventDefault()                  //evita  oenvio do form
})