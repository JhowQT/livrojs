const frm = document.querySelector("form")
const resp =document.querySelector("pre")
const itens = []

frm.rbPizza.addEventListener("click", ()=>{                                      // Quando o radio button e clicado
    frm.inBebida.className= "oculta"                                              //  oculta select das bebidas
    frm.inPizza.className= "exibe"                                              // exibe select das pizzas
})

frm.rbBebida.addEventListener("click", ()=>{         
    frm.inPizza.className= "oculta"                                              // oculta o select das pizzas
    frm.inBebida.className= "exibe"                                              // exibe  o select das bebidas
})


frm.inDetalhes.addEventListener("focus", ()=>{
    if(frm.rbPizza.checked){                                                    // se radibutton rbPizza estiver marcado
        const pizza = frm.inPizza.value                                         // obtém value do item selecionado
//--- Uso do operador ternário, para indicar o número de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
//--- Atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", ()=>{                                    // Quando o campo perde o foco
    frm.inDetalhes.placeholder = ""                                             // Limpa a dica de preenchimento
})

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    let  produto

    if(frm.rbPizza.checked){
        const num = frm.inPizza.selectedIndex                                   // obtem n° do item selecionado
        produto = frm.inPizza.options[num].text                                // texto do item selecionado 
    }else{
        const num = frm.inBebida.selectedIndex
        produto =frm.inBebida.options[num].text
    }

    const detalhes = frm.inDetalhes.value
    itens.push(produto + " (" + detalhes + ")")
    resp.innerText = itens.join("\n")

    frm.reset()
    frm.rbPizza.dispatchEvent(new Event("click"))
})
