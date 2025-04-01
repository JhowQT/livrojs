/*elaborar um programa que leia o nome e a idade de umm atleta de um clube de natação.
O programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, 
que pode ser "INFANTIL" ( aré 12 anos), "JUVENIL" (entre 13 a 18 anos) ou "ADULTO" (acima de 18 anos).
O programa deve conter as funções.

---> Funçoes Obrigatorios

retonarTracos -> que receba um nome como parametro e retorne uma linha com "-" para as letras do nome (nos espaços, manter os espaços)
categoriaAluno -> que receba um número como parâmetro e retorne a categoria do aluno, conforme a indicação do enunciado acima

*/
const frm = document.querySelector("form")
const resp = document.querySelector("pre")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inAtleta.value
    const idade = frm.inIdade.value
    function retornaTracos(nome){
    let tracos = nome.toLowerCase().replace(/\p{L}/gu, "-")
    return tracos
    }
    function categorizaAluno(idade){
        return idade < 13? "Infatil":idade >=13 && idade <= 18? "Juvenil" : "Adulto";
    }
    const traco = retornaTracos(nome)
    const idades = categorizaAluno(idade)
    resp.innerText = `${nome}\n${traco}\n Categoria: ${idades}`
})
frm.inBtn.addEventListener("click", ()=>{
    frm.reset()
    resp.innerText = ""
})



