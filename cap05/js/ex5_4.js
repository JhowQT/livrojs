alert("Dígite 0 para sair")

do{
    const num = Number(prompt("Número: "))  // Lê o número  
    if(num == 0 || isNaN(num)){             //se  num for == (igual) a 0 ou invalido
        const sair = confirm("Confirma saída?")     //solicita confirmação do usúario
        if(sair){
            break   //sai da repetição
        }else{
            continue    //volta ao inicio do laço
        }
    }
    if(num % 2 == 0){   //se par
        alert(`O dobro de ${num} é: ${num * 2}`)    //mostra o dobro
    }else{      //se não
        alert(`O triplo de ${num} é: ${num * 3}`)   //mostra o triplo
    }
}while (true)   //enquanto verdade (só sai do laço, pelo break)
alert("Bye bye...")
