const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const tarefa = frm.inTarefa.value
    const h5 = document.createElement("h5")
    const texto = document.createTextNode(tarefa)

    h5.appendChild(texto)
    dvQuadro.appendChild(h5)

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})
frm.btSelecionar.addEventListener("click", ()=>{
    
    const tarefas = document.querySelectorAll("h5")                 // retonar uma lista com a quantidade de elementos ao parametro passado ao queryselectoall ==> h5

    if(tarefas.length == 0){
        alert("Não há tarefas para selecionar")
        return
    }

    let aux = -1

    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"
            aux = i
            break
        }
    }

    if(aux == tarefas.length - 1){
        aux = -1
    }
    tarefas[aux + 1].className = "tarefa-selecionada"
})
frm.btRetirar.addEventListener("click", ()=>{
    
    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) =>{
        if(tarefa.className == "tarefa-selecionada"){
            aux = i 
        }
    })
    if(aux == -1){
        alert("Selecione uma tarefa para removê-la")
        return
    }

    if(confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)){
        dvQuadro.removeChild(tarefas[aux])
    }
})
frm.btGravar.addEventListener("click", ()=>{

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length == 0){
        alert("Não há terafas para serem salvas")
        return
    }

    let dados = ""
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" 
    })

    localStorage.setItem("tarefasDia",dados.slice(0, -1))

    if(localStorage.getItem("tarefasDia")){
        alert("Ok! Tarefas Salvas!")
    }
})
window.addEventListener("load", () =>{
    if(localStorage.getItem("tarefasDia")){
        const dados = localStorage.getItem("tarefasDia").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)
            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})

