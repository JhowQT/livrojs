/*
Elaborar um programa que leia um número e verefique se ele é ou não perfeito.
Um número dito perfeito é aquele que é igual á soma dos seus divisores inteiros
(exceto o próprio número). O programa deve exibir os divisores do número e a soma
deles.
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#inResp1")
const resp2 = document.querySelector("#inResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let incrementador = 1
    let divisores = "Divisores do " + numero + ": 1"
        
    for(let i = 2; i <= numero / 2; i++){
        if(numero % i == 0){
            divisores = divisores + ", " + i 
            incrementador = incrementador + i
        }
    }
    divisores = divisores + "(Soma: " + incrementador + ")"
    resp1.innerText = divisores

    if(numero == incrementador){
        resp2.innerText = `${numero} É um número perfeito`
    }else{
        resp2.innerText = `${numero} Não é um número perfeito`
    }

});

// frm.addEventListener("reset", () => {
//     resp1.innerText = ""
//     resp2.innerText = ""
// });
