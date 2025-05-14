/*
Criar dez imagens de números (de 0 a 9) como se fossem velas de aniversarios e salvá-las na pasta img. 
Em seguida, eloborar um programa que leia uma idade e insira as imagens correspondente na página conforme
o número informado. O programa deve permitir idades entre 1 e 120 anos.
*/

const frm = document.querySelector("form");
const resp = document.querySelector("#inRespostas");

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const idade = frm.inIdade.value;

    if(Number(idade) > 120){
        return resp.innerText = `O número deve ser igual ou menor que 120, ${idade} sobrepassa so esperado`;
    };

    resp.innerText = "";
    
    const pegaNumeros = (idade) =>{
        const tamanho = idade.length;
        for(let i = 0; i < tamanho; i++){
            const criaNum = document.createElement("img");
            criaNum.src = "./img/" + idade.charAt(i) + ".jpg";
            criaNum.textAlt = "Número " + idade.charAt(i);
            resp.appendChild(criaNum);
        }
    };
    pegaNumeros(idade);
});

frm.inNovoAleatorio.addEventListener("click", () =>{

    resp.innerText = "";
    function criaNum(numero){
        const numAleatorio = Math.floor(Math.random() * numero) + 1;
        return numAleatorio;
    }
    const pegaNumeros = (idade) =>{
        const tamanho = idade.length;
        for(let i = 0; i < tamanho; i++){
            const criaNum = document.createElement("img");
            criaNum.src = "./img/" + idade.charAt(i) + ".jpg";
            criaNum.textAlt = "Número " + idade.charAt(i);
            resp.appendChild(criaNum);
        }
    };
    const numAleatorio = criaNum(3);
    if(numAleatorio == 1){
        const numAleatorioUnidade = criaNum(9)
        const numString = numAleatorioUnidade.toString();
        pegaNumeros(numString);
    }else if(numAleatorio == 2){
        const numAleatorioUnidade = criaNum(99)
        const numString = numAleatorioUnidade.toString();
        pegaNumeros(numString);
    }else{
        const numAleatorioUnidade = criaNum(120)
        const numString = numAleatorioUnidade.toString();
        pegaNumeros(numString);
    }
});
