/*
Elaborar um programa para cadastrar os serviços s serem realizados por um auto center,
que organize a ordem de execução dos serviços. Armazenar os serviços no navegador do usúario
e a cada clique no botão EXECUTAR SERVIÇO remover o primeiro serviço e exibilo ma página. O 
programa deve atualizar o número de serviços pendentes quando: 

a) a página for aberta:
b) um serviço for incluido;
c) um serviço for removido;

*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h4")

const mostraServicoPendentes = () =>{

    if(localStorage.length === 0){
        resp1.innerText = `Não há Serviços Pendente`
    }
    const listaServicos = localStorage.getItem("servicos").split(";")
    resp1.innerText = `Serviços Pendentes: ${listaServicos.length}`
    
}

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const servico = frm.inServico.value

    const verServicos = (servico) =>{
        if(localStorage.getItem("servicos")){
            const servicos = localStorage.getItem("servicos").split(";")
            return servicos.includes(servico.toString())
        }else{
            return false
        }
    }
    
    if(verServicos(servico)){
        alert("Este serviço já existe na lista, informe outro!")
        frm.inServico.focus()
        return
    }

    if(localStorage.getItem("servicos")){
        const nomesServicos = localStorage.getItem("servicos") + ";" + servico
        localStorage.setItem("servicos", nomesServicos)
    }else{
        localStorage.setItem("servicos", servico)

    }
    mostraServicoPendentes()
    // const listaServicos = localStorage.getItem("servicos").split(";")
    // resp1.innerText = `Serviços Pendentes: ${listaServicos.length}`

    frm.inServico.value = ""                                                         // chama função que mostra as apostas já salvas                                                                // limpa form
    frm.inServico.focus()

})

frm.btExecutar.addEventListener("click", ()=>{
    
    const mosraPrimeiroItem = () =>{
        const listaServicos = localStorage.getItem("servicos").split(";")
        resp2.innerText = `Serviço em Execução\n${listaServicos[0]}`
    }
    mosraPrimeiroItem()
    const excluiPrimeiroItem = () =>{
        const listaServicos = localStorage.getItem("servicos").split(";")
        listaServicos.shift()

        if(listaServicos.length === 0){
            localStorage.removeItem("servicos")
            return
        }
        let listaAtualizada = listaServicos[0]
        if(listaServicos.length > 1){
            for(let i = 1; i < listaServicos.length; i++){
                listaAtualizada = listaAtualizada+ ";" +  listaServicos[i]
            }
        }
        
        localStorage.setItem("servicos", listaAtualizada)
    }
    excluiPrimeiroItem()
    mostraServicoPendentes()
})


window.addEventListener("load", ()=>{
    mostraServicoPendentes()
    // const listaServicos = localStorage.getItem("servicos").split(";")
    // resp1.innerText = `Serviços Pendentes: ${listaServicos.length}`
})
