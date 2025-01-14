/*Em um determinado momento do dia, apenas notas de 10,50 e 100 estão disponíveis em mum terminal de caixa eletrônico
Elaborar um programa que leia um valor de saque de um cliente, verefique sua validade ( ou seja, se pode ser pago com as notas disponíveis)
e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.  
*/

const frm = document.querySelector("form");                             //obtém elementos da página
const resp1 = document.querySelector("#outResp1");          
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {                                 //"Escuta evento submit do form" - submit -> tradução e enviar
    e.preventDefault()                                                  //Evita envio do form

    const saque = Number(frm.inSaque.value)                             //Obtem o valor do saque

    if(saque % 10 != 0){                                                //se o saque não e multiplo de 10 -> % obtem o resto da divsão
        alert("Valor inválido para notas disponíveis(R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }

    const notaCem = Math.floor (saque/100)                               //Math floor arredonda para o mais proxima 3.966 vai para 3, calcula notas de 100
    let resto = saque % 100                                              //Quanto sobra para pagar
    const notasCinquenta = Math.floor( resto / 50 )                      //Calcule notas de 50   
    resto = resto % 50                                                   //Quanto ainda sobra
    const notaDez = Math.floor(resto / 10)                               //Calcule notas de 10

    if (notaCem > 0 ) {                                                  //Exibe as notas de houver
        resp1.innerText = `Notas de R$ 100: ${notaCem}`
    }

    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }

    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }
});

frm.addEventListener("reset", () => {
    resp1.innerText = ""
});
frm.addEventListener("reset", () => {
    resp2.innerText = ""
});
frm.addEventListener("reset", () => {
    resp3.innerText = ""
});
