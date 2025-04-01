/* Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio.
Caso possua algum convênio, exibir uma caixa se seleção com os convênios "Amigo dos Animais" e "Saúde Animal".
O programa deve exibiro valor do desconto(10% sem convênio; 20% para "Amigo do Animais"; 50% para "Saúde Animal")
e o valor a ser pago.
CRIAR FUNÇÕES

calcularDesconto() --> que receba os parâmetros valor e taxa de desconto. Retornar o valor do desconto.
*/

const frm = document.querySelector("form")      // obtém elementos da página
const convenio = document.querySelector("#pConvenio")
const resp1 = document.querySelector("#outDesconto")
const resp2 = document.querySelector("#outPagar")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                     // evita envio do form
  const valor = Number(frm.inValor.value)

  let desconto

  if (frm.rbSim.checked) {
    if (frm.selConvenio.value == "amigo") {
      desconto = calcularDesconto(valor, 20)
    } else {
      desconto = calcularDesconto(valor, 50)
    }
  } else {
    desconto = calcularDesconto(valor, 10)
  }

  resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`
  resp2.innerText = `A Pagar R$: ${(valor-desconto).toFixed(2)}`
})

// não é necessário return
const calcularDesconto = (valor, taxa) => valor * (taxa/100)

frm.rbSim.addEventListener("change", () => {
  convenio.className = "exibe-linha"                     // exibe o parágrafo em uma linha (display: block)
})

frm.rbNao.addEventListener("change", () => {
  convenio.className = "oculta"
})
