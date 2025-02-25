/*
    Elaborar um programa que adicione mnúmeros a um vetor. O programa deve impedir a inclusão de núneros repetidos. 
Exibir a lista de números a cada inclusão. Ao clicar no botão VERIFICAR ORDEM, o programa deve analisar o conteudo
do vetor e informar se os números estão ou não em ordem crescente.
*/
const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp1");
const resp2 = document.querySelector("#inResp2");

const lista_numeros = [];

frm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const valor_numero = frm.inNumero.value;
    if(!lista_numeros.includes(valor_numero)){                                          // INCLUDES percorre todo o array e retorna um valor booleano
        lista_numeros.push(valor_numero);
    }else{
        resp2.innerText = `O numero ${valor_numero} já existe na lista ${lista_numeros}`
    };
    frm.reset();
    let lista = "";
    lista += `${lista_numeros}`;
    resp1.innerText = lista;
});
frm.btnVerificar.addEventListener("click", () => {

    let lista = "";
    lista += `${lista_numeros}`;
    if(lista_numeros.every((elemento_atual_do_array, indice_array) => indice_array === 0 || elemento_atual_do_array > lista_numeros[indice_array - 1])){ // EVERY retorna um valor booleano se a quando a condição for atendida
        resp1.innerText = lista;
        resp2.innerText = "A lista está em ordem crescente";
    }else{
        resp2.innerText = "A lista não está em ordem crescente";
    }
});
frm.btnCrescente.addEventListener("click", () => {

    lista_numeros.sort((a, b) => a - b );    // SORT ordena a lista, a - b compara compara usando ArrowFuction se A (primeiro elemento) e menor que B 
    let lista = "";
    lista += `${lista_numeros}`;
    resp1.innerText = lista_numeros;
    resp2.innerText = "Lista ordenada de forma crescente";
});
frm.btnDecrescente.addEventListener("click", () => {

    lista_numeros.sort((a, b) => a -b );
    lista_numeros.reverse();                // REVERSE inverte a ordem de qualquer lista
    let lista = "";
    lista += `${lista_numeros}`;
    resp1.innerText = lista_numeros;
    resp2.innerText = "Lista ordenada de forma decrescente";
});