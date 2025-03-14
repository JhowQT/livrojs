const frm = document.querySelector("form")

const TAXA_MULTA = 2 / 100                                    // na divisão 2/100 resulta em 0.02 que e 2% de multa Que aqui e fixa
const TAXA_JUROS = 0.33 / 100                                 // na divição de 0.33/100 resulta em  0.0033 que e 0,33% de juros AO DIA

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()                                     // cria variaveis (instancia objetos)
    const venct = new Date()                                    // do tipo date
    
    const partes = dataVenc.split("-")                          // recebe o valor de dataVenc em formato de lista => ["2023", "05", "10"]
    venct.setDate(Number(partes[2]))                            // Aqui e um processo de reatribuição de valores para ajustar a VARIAVEL --> VENCT
    venct.setMonth(Number(partes[1]) - 1)                       // Como PARTES e uma lista com os valores da DATA ATUAL e cada valor tem seu INDICE
    venct.setFullYear(Number(partes[0]))                        // set -> DATE, MONTH, FULLYER pega os seus indices correspontes REATRIBUI a VENCT

    const atraso = hoje - venct                                 // DATA em JAVASCRiPT são representados em MILISEGUNDOS, então aqui e o milisegundo(ms) de HOJE-->(em milisegundo)  "MENOS" VENCT-->(tambem em milisegundos)
    let multa = 0                                               // Inicializa multa e juros mcom 0
    let juros = 0

    if(atraso > 0){                                             // com o resultado de ATRASO sabese os dias meses e anos de atraso em MILISEGUNDOS
        const dias = atraso / 86400000                          // converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
        multa = valor * TAXA_MULTA                              // se ouver atraso e feita a multiplicação da TAXA pelo VALOR
        juros = valor * TAXA_JUROS * dias                       // se ouver atraso e feita a multiplicação da TAXA_JUROS pelo VALOR e depois por DIAS
    }
    const total = valor + multa + juros                         // somatorio dos resultado do valores 

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2 )
});