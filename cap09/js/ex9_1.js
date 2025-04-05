
const frm = document.querySelector("form") //referencia o forms
const imCLube = document.querySelector("#imgClube")//referencia a tag img polo ID
const dvTitulo = document.querySelector("#divTitulo")//referencia a div com o id="divTitulo"

const trocarClube = () =>{  // cirada uma função arrow fuction para ajudar na seleção do clube
    let clube               //vairavel que recebera o nome do clube

    if(frm.rbBrasil.checked){   //verefica qual radio button esta sendo slecionado
        clube = "Brasil"
    }else if(frm.rbPelotas.checked){
        clube = "Pelotas"
    }else{
        clube = "Farroupilha"
    }

    dvTitulo.className = `row cores-${clube}`   // define as classes de divTitulo: row e cores do clube

    imCLube.src = `img/${clube.toLowerCase()}.png`  // modifica a imagem de acordo com a seleção co cliente
    imCLube.className = "img-fluid"                 // muda o estilo para exibir a imagem
    imCLube.alt = `Simbolo do ${clube}`             // modifica o atributo alt

    localStorage.setItem("clube", clube)            // salva navegador a escolha do cliente
}

frm.rbBrasil.addEventListener("change", trocarClube)        // associa um botão change de cada botão do form a função trocarClube
frm.rbPelotas.addEventListener("change", trocarClube)       
frm.rbFarroupilha.addEventListener("change", trocarClube)   

const vereficaClube = () => {   // uma arrow fuction para verificar a visita anterior ao site
    if(localStorage.getItem("clube")){  // se já estiver salvo em algun clube
        const clube = localStorage.getItem("clube") // Obte, o nome do clube

        if(clube == "Brasil"){  // conforme o clube, marca o checked
            frm.rbBrasil.checked = true
        }else if(clube == "Pelotas"){
            frm.rbPelotas.checked = true
        }else{
            frm.rbFarroupilha.checked = true
        }
        trocarClube()   // chama a função que troca a imagem e as corres
    }
}
window.addEventListener("load", vereficaClube)  // Ao carregar a página, verifica se cliente já selecionou o clube anteriormente
