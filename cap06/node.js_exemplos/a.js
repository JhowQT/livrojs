/*
Elaborar um programa que leia nome e nota de "n" alunos até p usuário digitar "FIM" no nome. 
Após, verifique e exiba a maior nota da turma. Se a maior nota for superior ou igual a 7,
exiba os alunos que a obtiveram. Caso contrario, exibe a mensagem "Não há alunos em destaque na turma"
*/

const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair: ")

const alunos = []                                                       // declara vetor inicial

do{
    const nome = prompt("Nome: ")                                       // lê nome

    if(nome == "Fim"){                                                  // antes de ler a nota, verifica o camando de parada 
        break
    }

    const nota = Number(prompt("Nota: "))
    alunos.push({nome, nota})                                           // adiciona dados ao vetor de objetos 
    console.log("OK! Aluno(a) cadastrodo(a)...")

}while(true)
    console.log("-".repeat(40))                                         // exiba está STRING ( - ) 40 vezes
    const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)       // obtém a maior nota do array
    console.log(`Maior Nota: ${maior}`)                                 // exibe a maior nota

    if(maior >= 7 ){                                                    // para verificar se tem destaques na turma
        const destaques = alunos.filter(aluno => aluno.nota == maior)   // filtro
        for(const destaque of destaques){                               // percorre os alunos em destaque
            console.log(`- ${destaque.nome}`)                           // mostra os nomes precidido por (-)
        }
    }else{                                                              // senão, vai exibir a mensagem
        console.log("Nâo há alunos em destaque na turma")
    }
