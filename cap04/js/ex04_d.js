/*
Elaborar um programa que leia três lados e verefique se eles podem ou não formar um triângulo.
Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois.
Caso possam formar um triangulo, exiba tambem qual o tipo do triangulo.
Equilatero:(3 lados iguais)
Isósceles(2 lados iguais)
Escaleno(3 lados diferentes)    
*/
const frm = document.querySelector("form")
const resp1 = document.querySelector("#inResposta1")
const resp2 = document.querySelector("#inResposta2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const ladoA = Number(frm.inNumber1.value)
    const ladoB = Number(frm.inNumber2.value)
    const ladoC = Number(frm.inNumber3.value)
    const listaTriangulo = ["Equilatero", "Isósceles", "Escaleno"]

    /*
    a + b > c,
    𝑎 + 𝑐 > 𝑏
    b + c > a
    */

    let somaAB = ladoA + ladoB
    let somaAC = ladoA + ladoC
    let somaBC = ladoB + ladoC

    if(somaAB >= ladoC && somaAC >= ladoB && somaBC >= ladoA){
        if(ladoA == ladoB && ladoB == ladoC && ladoC ==ladoA){
            resp1.innerText = `Todos os lados formam um triangulo`
            resp2.innerText = `Tipo: Triângulo ${listaTriangulo[0]}`
        }else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
            resp1.innerText = `Todos os lados formam um triangulo`
            resp2.innerText = `Tipo: Triângulo ${listaTriangulo[2]}`
        }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
            resp1.innerText = `Todos os lados formam um triangulo`
            resp2.innerText = `Tipo: Triângulo ${listaTriangulo[1]}`
        }
    }else{
        resp1.innerText = `Para formar  um triangulo, um lado não pode ser maior a soma dos outros dois lados`
    }
})

frm.addEventListener("reset", ()=> {
    resp1.innerText = ``
    resp2.innerText = ``
})

