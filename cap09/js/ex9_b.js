/*
Elaborar um programa para cadastrar produtos na lista de compras da semana.
Salvar e exibir a listagem dos produtos em ordem alfabetica.
*/
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    const verProdutoLista = (produto) => {
        if(localStorage.getItem("produtos")){
            const produtos = localStorage.getItem("produtos").split(";")
            return produtos.includes(produto.toString())
        }else{
            return false
        }
    }

    if(verProdutoLista(produto)){
        alert("Este produto já está na lista")
        frm.inProduto.focus()
        return
    }

    if(localStorage.getItem("produtos")){
        const listaProdutos = localStorage.getItem("produtos") + ";" + produto
        localStorage.setItem("produtos", listaProdutos)
    }else{
        localStorage.setItem("produtos", produto)
    }

    const mostrarFrutas = () =>{
        
        if(!localStorage.getItem("produtos")){
            resp.innerText = ""
            return
        }

        const frutas = localStorage.getItem("produtos").split(";")
        frutas.sort()

        let linhas = ""

        for(let i = 0; i < frutas.length; i++){
            linhas += frutas[i] + "\n"
        }
         resp.innerText = linhas
    }
    
    mostrarFrutas()
    frm.reset()
    frm.inProduto.focus()
})

frm.btLimpar.addEventListener("click", () =>{
    
    if(confirm("Confirma a exclusão da tua lista de compras? ")){
        localStorage.removeItem("produtos")
        mostrarFrutas()
    }

})
