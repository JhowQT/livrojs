const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1    //número aleatorio entre 1 e 100
const CHANCES = 6                                       //constante  com o números máximo de chances

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)           //obtém o número digitado

    if(numero == sorteado){
        respDica.innerText = `Parabéns!! Número sorteado e: ${sorteado}`
        frm.btSubmit.disabled = true                    //troca  status do botões
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        }else{
            erros.push(numero)                      //adiciona número ao vetor
            const numErros = erros.length           //obtém tamanho do vetor
            const numChances = CHANCES - numErros   //calcula o número de chances
            
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText =`Game Over!! Número Sorteado: ${sorteado}` 
            }else{
                //usa operador ternario para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
frm.btNovo.addEventListener("click", () =>{
    location.reload()
})