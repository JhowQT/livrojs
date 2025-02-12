const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value       //obtem os dados do form
    const preco = Number(frm.inPreco.value)

    carros.push({modelo, preco})            //adiciona os dados ao vetor de objetos

    frm.inModelo.value = ""
    frm.inPreco.value = ""

    inModelo.focus()                        //Pociciona cursor em inModelo

    frm.btListar.dispatchEvent(new Event ("click")) //Dispara um evento de click em btListar (Equivale a um click no botão na página)

})

//Teste para saber se o array está vazio com o metodo redecu()

frm.btListar.addEventListener("click", () =>{       //"escuta clique em btListar"

    if(carros.length == 0){
        alert("Não há carros na lista")             //se o tamanmho do veotr for igual a zero
        return
    }
    
    //agora o uso do método reduce() concatena uma string, obtendo o modelo e o preço de cada veículo

    const lista = carros.reduce((acumulador, carro) =>
                    acumulador + carro.modelo + " - R$: " + carro.modelo.toFixed(2) + "\n" , "")
    resp.innerText = `Lista dos Carros Cadastros\n${"-".repeat(40)}\n${lista}`
})


//agora e o uso  do metodo filter()
frm.btFiltrar.addEventListener("click", () =>{

    const maximo = Number(prompt("Qaula o valor máximo que o cliente deseja pagar?"))

    if(maximo == 0 || isNaN(maximo)){   //se não informou ou valor invalido
        return                          //...retorna a função
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)

    if(carrosFilter.length == 0){
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }

    let lista = ""

    for(const carro of carrosFilter) {      //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
    })

    frm.btSimular.addEventListener("click", () =>{

        const desconto = Number(prompt("Qual e o percentual de desconto: "))
        if(desconto == 0 || isNaN(desconto)){       //se não informou ou se o valor e invalado
            return
        }

        const carrosDesc = carros.map(aux => ({
            modelo: aux.modelo,
            preco: aux.preco - (aux.preco * desconto / 100) 
        }))

        let lista = ""
        for(const carro of carros){
            lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
        }
        resp.innerText = `Carros com descont: ${desconto}\n ${"-".repeat(40)}\n ${lista}`

    })

