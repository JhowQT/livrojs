const frm = document.querySelector("form");                                             // poga os valores que estão dentro do form 
const dvPalco = document.querySelector("#divPalco");                                    // referencia a tag div com id = dicPalco

const POLTRONAS = 240;                                                                  // número de poltronas
const reservadas = [];                                                                  // vetor para salvar as poltronas salvas pelo cliente

window.addEventListener("load", ()=>{                                                   // quando a página carrega este bloco e ativado pelo javascript
    
    const ocupadas = localStorage.getItem("teatroOcupadas")                             // variavel ocupadas quer o retorno da logica do operador ternario, onde este verifica se existe algo salv no localStorage para esta chave -->("teatroOcupadas") 
    ? localStorage.getItem("teatroOcupadas").split(";")                                 // caso retorne TRUE--> executa este trecho de codigo -> que retorna uma lista separada por (";")
    :[];                                                                                // caso ternario retorne FALSE --> entra neste bloco de codigo que retorna uma lista vazia


    for(let i = 1; i <= POLTRONAS; i++){                                                // itera sobre a o número POLTRONAS até chegar 240
        const figure = document.createElement("figure");                                // cria a tag HTML figure
        const imgStatus = document.createElement("img");                                // cria a tag HTML img

        imgStatus.src = ocupadas.includes(i.toString())                                 // imgStatus chama ".src" para colocar uma caminho src para esta tag dentro da iteração e ao mesmo tempo cria um ternario para 
                                                                                        // dinamizar o valor do (.src), usando a variavel "ocupadas" mais o metodo "includes" que verifica se o i da iteração está
                                                                                        // presente dentro da variavel "includes", como ele está antes do "?" retorna um valor booleano para que seja usado depois do ""
            ? "img/ocupada.jpg"                                                         // se TRUE  --> se o i está na variavel ocupadas o .scr recebe este valor
            : "img/disponivel.jpg";                                                     // se FALSE --> se o i não está na variavel ocuapdas p .src recebe este valor

                                                                                        // assim a tag "img" via DOM a este ponto do programa terá "<img src="img/ocupada.jpg">" ou "<img src="img/disponivel.jpg"> "


        imgStatus.className = "poltrona";                                               // .className para adicionar uma classe para está variavel -> imgStatus que cria uma tag "<img>"
        const figureCap = document.createElement("figcaption");                         // cria tag figcaption atravez do DOM

        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";                               // criasce a variavel zeros e ela recebe strigns como "00" ou "0" e "" -> a escolha dele e feita pelo operador ternario que ve qual e o valor do i e atravez disso e feita a comparação logica

        const num = document.createTextNode(`[${zeros}${i}]`);                          // num e criado e ela ganha um texto com o metodo .createTextNode() e recebe a variavel zeros e valor de i

        figureCap.appendChild(num);                                                     // metodo .appendChild serve para inserir um filho para qaulquer tag html, e aqui ele insere um texto para a tag <figcaption>
        figure.appendChild(imgStatus);                                                  // tag <figue> recebe a src com os valores já formatados
        figure.appendChild(figureCap);                                                  // tag <figure> recebe tag filha <figcaption> com os seus valores já formatados

        if(i % 24 == 12)figure.style.marginRight = "60px";                              // estrutura muito elaborada, que quando o i sempre que for divido por 24 se seu resultado der 12 
                                                                                        // a tag <figure> ganhara um style de marginRight de 60px

        dvPalco.appendChild(figure);                                                    // no final e a tag <figure> vira filha da tag <div> refernciada pelo id #divPalco

        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));             // estrutura muito elaborada, quando o i for divido por 24 e der resto 0 ele atraves do DOM criara a tag <br> que será inserida depois da tag figuere de numero 24
        }
});

frm.addEventListener("submit", (e) => {                                                 // metodo acionado quando o evento "submit" ocorrer dentro da tag <form>
    e.preventDefault();                                                                 // a tag form tem uma propriedade que ela envia algo e renderiza a pagina, este metodo faz com que nada seja enviado e o programa nao reenicie

    const poltrona = Number(frm.inPoltrona.value);                                      // captura o valor da tag <input> que tem o id #inPoltrona

    if(poltrona > POLTRONAS){                                                           // verifica se a poltrona que foi digitada e maior que as poltronas existentes do programa
        alert("Informe um número de poltrona válido");                                  // cria um alert formatado
        frm.inPoltrona.focus();                                                         // da um foco a tag <input> com o id #inPoltrona
        return;                                                                         // retorna com a logica do blodo de codigo e para esta função
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")                             // cria a variavel ocupadas e usa o operador ternariom para verificar se existe um valor nele
        ? localStorage.getItem("teatroOcupadas").split(";")                             // o retorno e boobleano, caso seja TRUE executasse este primeiro trecho
        : [];                                                                           // caso seja false executase este bloco

    if(ocupadas.includes(poltrona.toString())){                                         // if para verificar que verifica se o valor inserido no inPoltrona existe no localStorage
        alert(`Poltrona ${poltrona} já está ocupada...`);                               // se True executa este bloco do if
        frm.inPoltrona.value = "";                                                      // muda o valor do inPoltrona para vazio
        frm.inPoltrona.focus();                                                         // foca no tag <input>
        return;                                                                         // retorna e para esta função
    }                                                                                   // se False continua o programa

    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];                  // cria a variavel imgPoltrona, metodo .querySelectorAll pega todas as tags, que aqui foi passado a tag <img> ("img"), pega todas as tags que estão dentro dessa div e as transforma todas em uma lista
                                                                                        // [poltrona - 1] serve para fazer a referencia correta da proltrona escolhida, como numa lista o 1° tem o indice ZERO, aqui fazemos o tratamento para referenciar a img correta que vai ser tratada
                                                                                        // 
    imgPoltrona.src = "img/reservada.jpg";                                              // pegando o valor de inPoltrona, a gente insere um src nele

    reservadas.push(poltrona);                                                          // a gente insere a variavel poltrona na lista reservadas

    frm.inPoltrona.value = "";                                                          // zera o valor do input 
    frm.inPoltrona.focus();                                                             // e fazemos com que ele ganhe o foco
});

frm.btConfirmar.addEventListener("click", () =>{                                        // função acionada ao clicar no botão da tag <input> com id #btConfirmar

    if(reservadas.length == 0){                                                         // verifica se existe dados na variavel reservadas
        alert("Não há poltronas reservadas");                                           // se for true, não houvendo nada cria este alert()
        frm.inPoltrona.focus();                                                         // foca no input de entrada de dados
        return;                                                                         // retorna este trecho de bloca e para este bloco de função
    }                                                                                   // se for False, e existir dados salvos na variavel reservadas ele ignora este if

    const ocupadas = localStorage.getItem("teatroOcupadas")                             // este variavel verifica se existe algo salvo no localStorage com este nome de chave e trata usando operador ternario
        ? localStorage.getItem("teatroOcupadas").split(";")                             // se TRUE, entra para este bloco, onde pegamos os valores e usando o metodo .split() criamos uma lista que serão separados por ";"
        : [];                                                                           // se FALSE, atribuisse a ela uma lista vazia

    for(let i = reservadas.length - 1; i >= 0; i--){                                    // itera sobre o array reeservadas, dessa vez de forma decrescente onde [i] representa o ultimo da lista
                                                                                        // 
        ocupadas.push(reservadas[i]);                                                   // salva o valor de [i] na lista ocupadas

        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];         // pega todas as tags <img>, como são 240, usando o [i], procura o seu respectivo <img>

        imgPoltrona.src = "img/ocupada.jpg";                                            // aqui atualizamos seu .scr para "img/ocupada.jpg"

        reservadas.pop();                                                               // o [i] ao final e retirado da lista, o metodo .pop() remove o ultimo item de qualquer lista e aqui usamos essa logica para remover o ultimo item da lista reservadas que a gente já trato
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));                         // para atualizar o localStorage, a lista ocupadas contem todas as reservas e usano a chave "teatroOcupadas" salvamos os valores nela, e usamos o metodo .join() para seprar cada valor por ";"
});


