/*
    Elaborar um programa que leia nome é número de acertos de candidatos inscritos em um concurso.
Listar dados a cada inclusão. Ao clicar no botão APROVADOS 2° FASE, ler o número de acertos para 
aprovação dos candidatos para a 2° fase co concurso, conforme ilustre a FIGURA 6.16. O programa 
deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual
à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos(FIGURA 6.17).
Caso nenhum candidato tenha sido aprovado, exibir mensagem.
*/
 const frm =  document.querySelector("form");
 const resp = document.querySelector("pre");

const listaAprovados = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let candidatos = frm.inNome.value;
    let numeroAcertos = Number(frm.inAcertos.value);
    listaAprovados.push({candidatos, numeroAcertos});
    frm.reset();
    // for(const candidato of listaAprovados){
    //     const {candidatos, numeroAcertos} = candidato
    //     lista += `${candidatos} - ${numeroAcertos} acertos`
    // };
    listaAprovados.forEach((candidato, indice)=>{
        resp.innerText = `${candidato.candidatos} - ${candidato.numeroAcertos} acertos\n`;
    });
    // resp.innerText = lista;
});
frm.btnListar.addEventListener("click", () =>{

    let lista = "";
    for(const candidato of listaAprovados){
        const {candidatos, numeroAcertos} = candidato
        lista += `${candidatos} - ${numeroAcertos} acertos\n`;
    };
    resp.innerText = lista
});
frm.btnSegundaFase.addEventListener("click", () => {

    const entrada = prompt("Digite o número de para a APROVAÇÂO");
    const numeroAprovacao = Number(entrada)
    let lista = ""
    if(isNaN(numeroAprovacao) || entrada.trim() === ""){
        alert("Digite um número válido paraq prosseguir com o programa");
    };
    let aprovadosSegundaFase = listaAprovados.filter(aux => aux.numeroAcertos >= numeroAprovacao);
    if(aprovadosSegundaFase.length == 0){
        alert("Não há candidatos que atendem a este critério");
    };
    aprovadosSegundaFase.forEach((candidato)=>{
        const {candidatos, numeroAcertos} = candidato
        lista += `${candidatos} - ${numeroAcertos} acertos\n`;
    });
    resp.innerText = lista;
});