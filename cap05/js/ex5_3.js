let num // declara variavel num como let, pois ela pode ser alterada e será acessada fora do bloco do..while

do{     //cria laçoo de repetição (faça...)
    num = Number(prompt("Número: "))    //lê um número
    if(num == 0 || isNaN(num)){         //se num e (== "igual") a 0 ou invalidado
        alert("Dígite um número válido...")
    }

} while (num == 0 || isNaN(num))    //...enquanto num == 0 ou invalido
let pares = `Pares entre 1 e ${num} `  //string que contera a resposta
for(let variavel = 2; variavel <= num; variavel = variavel + 2){
    pares = pares + variavel + " , "
}
alert(pares)    //axibe lista do números
