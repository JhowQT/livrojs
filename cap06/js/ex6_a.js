/*
    Elaborar um programa para gerar uma tabela com os jogos de  uma fase eliminatória de um campeonato.
    O programa deve conter três funções (s serem executadas no evento CLICK de cada botão)
    1° - Validar o preenchimento, adicionar um clube ao vetor e listar os clubes;
    2° - Listar os clubes (se houver);
    3° - Montar a tabela de jogos no formato primerio x ultimo, segundo x penúltimo e assim por diante;
    Exibir mensagens e nãi listar a tabela de jogos, caso o número de clubes informados seja ímpar.
*/

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const lista_clubes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome_clube = frm.inClube.value; 
    lista_clubes.push(nome_clube);
    frm.reset();
});

frm.btnListar.addEventListener("click",() => {

    const lista = "";
    lista_clubes.forEach((clubes, indice_clubes) => {
        lista = `${lista} ${indice_clubes + 1}° - ${clubes}\n`;
    });
    resp.innerText = lista;
});
frm.btnTabela.addEventListener("click", () =>{
    const lista_confronto = "";
    if(lista_clubes.length % 2 == 0){
        for(let i = 0; i < lista_clubes.length / 2; i++){
            let time_adversario = lista_clubes[lista_clubes.length - 1 - i];
             lista_confronto += `${lista_clubes[i]} X ${time_adversario}\n\n`;
        }
    }else{
        alert("A lista está IMPAR insira mais time para ver os CONFRONTOS");
    };    
    resp.innerText = lista_confronto;
});