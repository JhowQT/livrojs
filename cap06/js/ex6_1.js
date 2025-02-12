const frm = document.querySelector("form")      //obtém elementos da página
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []    //lista ou vetor que serão globais

frm.addEventListener("submit", (e) =>{
    e.preventDefault()                  //evita o envio do form

    const nome = frm.inPaciente.value   //obtém o valor do input
    pacientes.push(nome)                //adiciona o nome no final do vetor
    let lista = ""                      //string para concatenar os pacientes

    /*Usando um FOR tradicional (inicia em 0, enquanto menor que tamanho do array)*/
    for(let variavelQualquer = 0; variavelQualquer < pacientes.length; variavelQualquer++){
        lista += `${variavelQualquer + 1}. ${pacientes[variavelQualquer]}\n`
    }   

    respLista.innerText = lista     //exibe a lsita de pacientes na página
    frm.inPaciente.value = ""       //limpa conteúdo do campo de formulário
    frm.inPaciente.focus()          //posiciona o cursor no campo
})

/*Adiciona um "ouvinte" para o evento click nobtUrgencia que está no form*/
frm.btUrgencia.addEventListener("click", () =>{

    if(!frm.checkValidity){     //verifica se as validações o form estão ok(no caso, paciente -is required-)
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()  //posiciona o cursor no campo inPaciente
        return                  //Retorna ao Form
    }

    const nome = frm.inPaciente.value       //ontém o nome do paciente 
    pacientes.unshift(nome)                 //adiciona paciente no inicio do vetor
    let lista = ""                          //String para concatenar pacientes

    /*FOREACH aplicado sobre o array pacientes*/
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista     //exibe a lista de  pacientes na página
    frm.inPaciente.value = ""       //limpa conteúdo do campo de formulário
    frm.inPaciente.focus()          //posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    
    if(pacientes.length == 0){   //se o tamanho do vetor = 0
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()   //remove do inicio da fila (e obtém nome)
    respNome.innerText = atender        //exibe o nome do paciente em atendimento
    let lista = ""                      //string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista         //exibe a lista de pacientes da página
})