const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const senha = frm.inSenha.value;
    const erros = [];

    if(senha.length < 8 || senha.length > 15){                          // verifica se o tamanho sa senha e válido
        erros.push("possuir entre 8 e 15 caracteres")
    }
    if(senha.match(/[0-9]/g) == null){
        erros.push("A senha deve possuir no minímo um número (0 a 9)")  // verifica se a senha possui números
    }
    if(!senha.match(/[a-z]/g)){                                 // verifica se não possui letras minísculas
        erros.push("Possuir pelo menos uma letra minúscula")
    }
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){           // verifica se possui 2 letras maiusculas
        erros.push("Possuir no minímos 2 letras maiúsculas")
    }
    if(!senha.match(/[\W|_]/g)){
        erros.push("Possuir no minimo 1 simbolo especial")              // verifica se não possui simbolos especias ou " _ "
    }
    if(erros.length == 0){
        resp.innerText = "OK! Senha válida"
    }else{ 
        resp.innerText = `ERRO... A senha deve ${erros.join(",\n ")}`
    }
    frm.reset()
});