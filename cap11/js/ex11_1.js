/*

*/
const frm = document.querySelector("form");                             // captura os elementos da página
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// nome dos cavalos particapantes de páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];// lista com os nomes dos cavalos que existem no programa

// vetor que irá armazenar um objeto aposta (com n° cavalo de aposta)
const apostas =[];                                                      // array que obtera os objetos da criação

frm.addEventListener("submit", (e) =>{                                  // captura todos os eventos e ações dentro da tag FORM
    e.preventDefault();                                                 // envita o envio do form

    const cavalo = Number(frm.inCavalo.value);                          // dados do form do input
    const valor = Number(frm.inValor.value);                            // dados do form do input

    

    // adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor});                                      // variavel recebe os cavalo e valor e assim vira (apostas) --> vira um objeto
    
    console.log(apostas)

    // variavel para exibir a lista das apostas realizadas
    let lista = `Aposta Realizadas\n${"-".repeat(25)}\n`;               // variavel para exibir  texto no html

    // percorre o vetor e concatena em lista as apostas realizadas
    for(const aposta of apostas){                                       // iterando a variavel apostas
        lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;   // const aposta vira um objeta com os mesmos valores da variavel apostas
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;                 // usando a variavel lista para concatenar valores que eles obtem
    }
    respLista.innerText = lista;                                        // usando o varieval respLista para obter o valor de lista

    frm.reset();                                                        // reseta a página assim que clicamos no submit
    frm.inCavalo.focus();                                               // foca no input inCavalo
});

frm.inCavalo.addEventListener("blur", () => {                           // fução ativada quando o campo input não está mais focado
    // se não preencheu o campo, limpa respCavalo e retorna (não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
    if(frm.inCavalo.value == ""){                                       // se o campo está vazio e treu
        respCavalo.innerText = "";                                      // ele deixa o campo da tag h5 que tem o id #outCavalo que no js e referenciada por respCavalo, vazio
        return;                                                         // retorna a lógica para fora do if
    }
    const numCavalo = Number(frm.inCavalo.value);                       // n° do cavalo convertido em Number

    if(!validarCavalo(numCavalo)){                                      // usa o metodo validarCavalo para usar no if, que inverte o valor retornado pelo metodo com o uso do --> !
        alert("N° do cavalo inválido");                                 // como o if apenas e executado quando qualquer comparação for TRUE, para essa lógica invertemos o resultado do metodo valicarCavalo
        frm.inCavalo.focus();                                           // caso validação seja true o cavalo e aceito e usamos ! para não ativar esse bloco do if, caso retorne false o usamos ! paera inverter seu valor e assim o if pode executar seu bloco de código
        return;
    }
    const nome = obterCavalo(numCavalo);                                // metodo obterCavalo retorna o cavalo pelo indice dele
    const contaNum = contarApostas(numCavalo);                          // agrega o valor do retorno da função contarApostas para a variavel contaNum
    const total = totalizarApostas(numCavalo);                          // variavel total recebe o valor de retorno da função totalizarApostas

    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;//responsavel para incorporar no html o tratamento destas 3 variaveis apartir da referencia do id para o HTML
});

const obterCavalo =(num)=>{                                             // (num)e um parametro,--> [0, 1, 2, 3, 4, 5] esses são os indices do Cavalo
    const posicao = num - 1;                                            // num recebe 3, para chamaro cavalo Belga, pórem Belga está no indice 2 por isso num - 1, ele volta um digito para referenciar corretamente ao cavalo da lista
    return CAVALOS[posicao];                                            // retorna o valor da posição da lista CAVALOS passado por num-1
};
const validarCavalo =(num)=>{                                           // arrow function - que recebe como parametro um número inteiro
    return num >=1 && num <= CAVALOS.length;                            // 2 comparações,1° se num e maior 1 e num e menor ou igual ao tamanho do array CAVALOS
};                                                                      // retorna TRUE ou FALSE, com essa comparação da para saber que o numero inserido não e 0 e não ultrapassa o tamanho do array, sendo assim o número estara ou não dentro do array CAVALOS

const contarApostas = (num) => {                                        // num e o parametro para este metodo
    let contador = 0;                                                   // contador
    for(const aposta of apostas){                                       // for of para iterar na variavel apostas
        if(aposta.cavalo == num){                                       // procura na variavel apostas quantas vezes o parametro (num) se encontra dentro dela
            contador++                                                  // por estar dentro do if a variavel contador++ recebe sempre mais 1 quando essa comparação for verdadeira
        }
    }
    return contador;                                                    // este metodo retorna o valor da variavel contador
};

const totalizarApostas = (num) => {                                     // recebe o parametro num
    let total = 0;                                                      // variavel para somar o total de apostas encontrado dentro deste bloco de codigo
    for(const aposta of apostas){                                       // for para iterar sobre a variavel apostas 
        if(aposta.cavalo == num){                                       // comparação para saber se o parametro num e igual ao valor de apostas.cavalo
            total += aposta.valor;                                      // se for TRUE, ele entra dentro do IF e o total recebe o valor de aposta.valor a cada iteração que for verdadeira
        }
    }
    return total;                                                       // para no final ele retonar o total final desse bloco de codigo
};

frm.inCavalo.addEventListener("focus", ()=>{                            // quando o inCavalo e focado novamente ativa este trecho de codigo
    frm.inCavalo.value = "";                                            // apago o valor do input cavalo    
    respCavalo.innerText = "";                                          // limpa respCavalo
});
frm.btResumo.addEventListener("click", () =>{                           // metodo que e acionado quando clicamos no botão resumo
    const somaApostas = [0, 0, 0, 0, 0, 0]                              // array para para saber o total de apostas que cada cavalo recebeu

    for(const aposta of apostas){                                       // for of para iterar sobre a lista-> apostas
        somaApostas[aposta.cavalo - 1] += aposta.valor;                 // somaApostas[aposta.cavalo -1]--> equivale ao indice de sompaApostas += nesse indice ele recebe o valoo de aposta.valor para o indice apontado
    }                                                                   // assim os valores existentes são salvos nos respectivos indices feita por essa iteração

    let resposta = `N° Cavalo.................R$ Aposta\n${"-".repeat(35)}\n`;// resposta e uma variavel para formatar texto e enviar para o HTML
    CAVALOS.forEach((cavalo, i) => {                                    // forEach para percorer a variavel CAVALOS, cavalo e o valor inicial da lista e i e o indice
        resposta += `${i + 1} ${cavalo.padEnd(20)}`;                    // somase 1 ao valor de i e cavalo e i são atribuidos a variavel resposta para depois ser adicionado ao HTML
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`       // usando o indice de CAVALOS, chamase o valor de somaApostas[i] usando o mesmo indice para depois tambem ser adicionado mo html
    })
    respLista.innerText = resposta;                                     // e atribuido a variavel resposta para a variavel respLista
});

frm.btGanhador.addEventListener("click", ()=>{                          // função acionada quando clicamos no botão btGanhador
    
    const ganhador = Number(prompt("N° Cavalo Ganhador: "));            // prompt para receber um valor e atribuir a variavel ganhador

    if(isNaN(ganhador) || !validarCavalo(ganhador)){                    // verifica se ganhafor e isNaN ou seja se o prompt retorno vazio 
                                                                        // ou se e o retorno da função validarCavalo usando a variavel ganhador como para para metro teve renorto TRUE que aqui pelo if ele e invertido pelo uso de !
        alert("Cavalo Inválido")                                        // caso uma dessas duas comparações retrne verdadeiro e informado este alert() e o bloco de codigo e encerrado
        return;                                                         // return para encerrar o bloco de codigo
    }
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);// usando o metodo reduce, para saber o total de apostas, acumulador soma o valor de aposta.valor, isso tudo e uma iteração sobre a variavel apostas

    let resumo = `Resultado Final do Páreo\n${'-'.repeat(30)}\n`;       //variavel que ira ajudar na adição no html

    resumo += `N° Total de Apostas: ${apostas.length}\n`;               // total de apostas
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;                // o resulatdo do reduce e atribuido a variavel total que e atribuida a resumo
    resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n\n`; // ganhador e valor do retorno de obterCavlo são atribuidos ao resumo
    resumo += `N° de Apostas: ${contarApostas(ganhador)}\n`;            // valor de contarApostas e atribuido ao resumo
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}\n`;//valor de totalizarApostas e atribuido ao resumo

    respLista.innerText = resumo;                                       // resumo e atribuido a respLista

    frm.btApostar.disabled = true;                                      // este botão desabilitado
    frm.btGanhador.disabled = true;                                     // este botão e desabilitado
    frm.btNovo.focus();                                                 // botão novo ganha foco
});

frm.btNovo.addEventListener("click", () => window.location.reload());   // ao clicar neste botão a página e relida novamente

