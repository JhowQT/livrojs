const express = require('express');                                                 // recebe o pacote 'express', onde a função require() e responsavel por procurar este pacote na NodeModules
const app = express();                                                              // app recebe o pacote de express, as usar parenteses (), ele valor e passado em forma de objeto para app, onde ele pode acessar os valor de EXPRESS de forma dinamica
const port = 3001                                                                   // cria uma caminho para ser uma porta , 3001 número onde os clientes podam chegar ao projeto

app.get('/', (req, res) => {                                                        // GET fala que a um caminho do projeto para ele ser acessado quando o projeto está no ar, '/' e a porta desse caminho por onde quem acessar esse caminho será direcionado para a resposta que esse caminho tem
    res.send('Olá...Bem-vindo!');                                                   // (req, res) compõe o Handler, escopo do get, tudo que esta dentro dele, são dois objetos que fazem parte do EXPRESS, req(recebe dados do cliente) e res(envia resposta para o cliente)
});                                                                                 // send(), e chamado pelo res, para enviar uma resposta quando esse caminho for acessado --> '/', e ao mesmo tempo como o EXPRESS está se comunicando com o cliete já que res() faz parte dele,
                                                                                    // send() e responde o cliente e encerra a interasão da resposta

app.get('/cap12' ,(req, res) => {                                                   // get('/cap12') --> e o path(rota) onde esse bloco de codigo vai ser encontrado
    res.send('<h2>Capitulo 12: Introdução ao Express</h2>');                        // (req, res) --> HANDLER recebimento e resposta do GET
});                                                                                 // send() vai enviar a resposta para que acesso essa rota e fechar a comunicação deste bloco de codigo com o cliente


// para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());                                                            // cria um MIDDLEWARE, use() indica que um middleware foi criado, express,json() fala que este middleware so ira tratar JSON que vira da requisição e retornar um req.body() que retorna um objeto com os dados do JSON recebido
app.post('/filmes', (req, res) => {                                                 // cria a rota de acesso /filmes, coteudo de recebimento e resposta já do express--> (req, res) 
    // const titulo = req.body.titulo;                                      
    // const titulo = req.body.genero;
    const {titulo, genero} = req.body;                                              // (req.body) dados obtidos pelo express.json() --> onde acontece a desestruração, onde cada variavel corresponde a uma chave do JSON
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);                  // res() metodo de resposta, send() manda uma resposta já tratada e ao mesmo encerra a comunicação com o cliente
});


app.listen(port, () =>{                                                             // listen(), metodo responsavel por iniciar o servidor, e dentro deste bloco de codigo ele cria
    console.log(`Servidor rodando em http://localhost:${port}`);                    // a porta onde o servidor pode ser acessado
});                                                                                 // 

// Exemplo de Middleware
const log = (req, res, next ) => {                                                  // criação de um metodo MIDLLEWARE para verifcar data e hora de acesso
    console.log(`....................Acessado em ${new Date()}`);                   // mostra a hora e data já formatada no terminal do dev
    next();                                                                         // função do MIDDLEWARE, e obrigatorio quando se criar um MIDDLEWARE, serve para continuar o bloco de codigo
};

app.get('/transfere', log, (req, res) => {                                          // get() cria a rota de transfere dentr da rota principal que já existe, 
    res.send("Ok! Valor transferido com sucesso...");                               // log() chama o metodo log() que a gente crio logo ali encima, para ser executado junto a este bloco de codigo
});                                                                                 // res.send() -> res() resposta da rota para a requisição, send() trata algo e devolve como resposta e ao mesmo encerra a interração com o cliente

//arquivos para as rotas para o Cadastro de livros
const livros = require('./livros');

app.use('/livros', livros);                                                         // identifcação da rota e da conts (require) associada
