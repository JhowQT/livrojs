/*Uma palavra ou frase é um palindromo quando pode ser lida nos dois sentidos, como RADAR, MUSSUM, ABBA.
Elaborar um programa que leia uma frase e informe se ela é ou não um palindromo ( converte a frase para caixa alta).
Apresente que a frase e um palindromo  
*/


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const palavra = frm.inPalindromo.value
    const tamanhoPalavra = palavra.replace(/ /g, "")

    let letra = ""
    let letra2 = ""

    if(tamanhoPalavra.length % 2 == 0){
        letra = ""
        letra2 = ""
        for(let i = 0; i < tamanhoPalavra.length/2; i++){
            let metadeDapalavra = tamanhoPalavra[tamanhoPalavra.length -1 -i]
            let metadeDapalavra2 = tamanhoPalavra[i]
            letra = letra +  metadeDapalavra
            letra2 = letra2 + metadeDapalavra2
        }
        for(let i = 0; i < tamanhoPalavra.length/2; i++){
            if(letra[i] == letra2[i]){
                resp.innerText = `${palavra} É um palindromo`
            }
        }
    }else{
        let letraImpar = ""
        for(let i = tamanhoPalavra.length - 1; i >= 0; i--){
            letraImpar += tamanhoPalavra[i]
        }
        if(tamanhoPalavra === letraImpar){
            resp.innerText = `${palavra} E um palindromo`
        }
        
    }
 
})