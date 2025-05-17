/*
Elaborar um programa que leia um nomee, ao clicar no botão "Exibir Partes do Nome", insira linhas de cabeçalho h3 na página 
com as aprtes do nome em cores aleatórias. Ao clicar no botão, o programa deve vereficar a exist~encia de linmhas de cabeçalho 
h3 na página, excluindo-as se houver.
*/

const frm = document.querySelector("form");
const divNome = document.querySelector("#divNome")
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const pegaTagH3 = document.querySelectorAll("h3")
    // if(pegaTagH3.length > 0){
    //     divNome.removeChild(pegaTagH3)
    // }
    pegaTagH3.forEach(h3 => divNome.removeChild(h3))
    
    

    const nome = frm.inNome.value
    const trataNome = nome.trim().split(" ")

    const listaCores = ["yellow", "blue", "green", "red", "orange", "purple", "brown", "gray", "pink"]


    for(let i = 0; i < trataNome.length; i++){
        const criaH3 = document.createElement("h3")
        const corAleatorio = Math.floor(Math.random() * listaCores.length)
        criaH3.style.color = listaCores[corAleatorio]
        const textNome = document.createTextNode(trataNome[i])
        criaH3.appendChild(textNome)
        divNome.appendChild(criaH3)
        
    }
    
    
});