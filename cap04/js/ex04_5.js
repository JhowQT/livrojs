/*
Elaborar um programa que leia um número e calcule a sua raiz quadrada.
Caso a raiz seja exata (quadrados perfeitos), informa-los, caso contrário, informe:
'Não há raiz exata para ...' 
*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);
    if (Number.isInteger(raiz)) {
        resp.innerText =`Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }
});

