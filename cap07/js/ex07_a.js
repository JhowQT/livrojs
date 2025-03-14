/*Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos. O programa deve ler
uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em:
A) exibir todas as letras das posições pares da mensagem;
B) Exibir todas as letras das posições impares da mensagem.
O programa deve conter ainda um botão para descriptografar a ,mensagem, ou seja, retornar a mensagem original a 
partir do texto cifrado.

charAT()--> retorna um carecter expecifico 
toUpperCase()--> converte as palavras em maiuscula
toLowerCase()--> converte as palavras em miniscula
substr()--> pega caracteres de uma determinada posição a outra
trim()--> remove todos os espaços vazios
trimStar()--> remove todos os espaços no inicio
trimEnd()--> remove todos os espaços no final
substring() and slice()--> pega strings a partir do seus indece
indexOf()--> procura pelo começo da STRING a ocorrencia dela,sendo passada como parametro um CARRACTER e retorna o indice da primeria ocorrencia
lastIndexOf()--> procura pelo fim da STRING a ocorrencia dela,sendo passada como parametro um CARRACTER e retorna o indice da primeria ocorrencia
includes()--> procura por caracteres na STRING, o caracter e passado como parametro na busca, retorna TRUE or FALSE, caso ele seja encontrado
split()--> usado para dividir uma STRING em um ARRAY de SUBSTRINGS, parametro e uma caracter da palavra, ela e o parametro que ira dividar a string, ela fica de fora do array
match()--> faz uma busca por caracteres que existen e retonar as strings enconctradas em uma lista e null se elas não existirem
replace()--> substitui string por outra, 1 parametro que será trocado  e o 2 segundo o valor que irá ser inserido REGEX támbem e aceito como parametro
*/


const frm = document.querySelector("form")
const resp = document.querySelector("h3")




frm.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    //const numeroAleatorio = Math.floor(Math.random() * 10)
    const palavra = frm.inName.value
    const tamanhoDaPalavra = palavra.length

    let palavraCriptografada = palavra

    console.log("Tamanho da palvra: " + palavra.length)
    for(let i = 0; i < tamanhoDaPalavra; i++){

       let  numeroAleatorio = Math.floor(Math.random() * 10)
       let stringAleatorioDaPalavra = palavra.charAt(numeroAleatorio)
       let stringAleatorioDaPalavra2 = palavra.charAt(numeroAleatorio - 1)
       palavraCriptografada = palavraCriptografada.replace(new RegExp(stringAleatorioDaPalavra,'g'),stringAleatorioDaPalavra2)

       console.log(`Palavra CRIPTO ${palavraCriptografada}`)
       console.log(`Este são os números aleatorios: ${numeroAleatorio} indice ${i}`)
       console.log()
       console.log(`Indice aleatoria a partir do for com charAt: ${stringAleatorioDaPalavra}`)
    }

    resp.innerText = `${palavra}\n${palavraCriptografada}`
}) 

frm.btnDescri.addEventListener("click", ()=>{
    
    let palavra = frm.inName.value
    
    frm.reset()
    resp.innerText = palavra
})