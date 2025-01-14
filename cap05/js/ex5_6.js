const frm = document.querySelector("form")      //obtém o elemento da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{      //"escuta" evento submit do form
    e.preventDefault()      //evita o envio do form

    const num = Number(frm.inNumero.value)       //obtémnúmero informado
    // let numDivisores = 0    //declara e inicializa o contador

    // for(let variavelQualquer = 1; variavelQualquer <= num; variavelQualquer++){    //pecorre todos os posiveis divisores de num
    //     if(num % variavelQualquer == 0){     //verifica se variavelQaulquer (1, 2, 3...) é divisor do num
    //         numDivisores++      // ae é incrementa mais 1 ao contador
    //     }
    // }

    // if(numDivisores == 2){      //se possui apenas 2 divisores, é primo
    //     resp.innerText = `${num} É primo`
    // }else{
    //     resp.innerText = `${num} Não é primo`
    // }

    let temDivisor = 0      //declara e inicializa a variavel tipo flag
    
    for(let i = 2; i <= num / 2; i++){      //percorre os possiveis divisores do num

        if(num % i == 0){       //se tem um divisor
            temDivisor = 1      //muda o flag
            break               //sai da repetição
        }

    }

    if(num > 1 && !temDivisor){     //se num > 1 e não possui um divisor
        resp.innerText =`${num} É primo`
    }else{
        resp.innerText = `${num} Não é primo`
    }

})

