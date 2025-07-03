const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const dbKenx = require("./data/db_config");

router.get("/", async(req, res) => {
    try{
        const livros = await dbKenx("livros").orderBy("id", "desc");
        res.status(200).json(livros);
    }catch(error){
        res.status(400).json({msg: error.message});
    }
});
module.exports= router;

// Metodo post e usado para inclusão
router.post("/", async(req, res) =>{
    //faz a desestruturação dos dados recebidos no corpo da requisição
    const {titulo, autor, ano, preco, foto} = req.body;

    // se algum dos campos não foi passado, irá enviar uma mensagem de erro e retornar
    if(!titulo || !autor || !ano || !preco || !foto){
        res.status(400).json({msg:"Enviar titulo, autor, ano, preço e foto do livro"});
        return;
    }

    // caso ocorro algum erro na inclusão, o programa irá capturar (catch) o erro
    try{
        // insert, faz a inserção na tabela livros (e retorna o id do registro inserido)
        const novo = await dbKenx("livros").insert({titulo, autor, ano, preco, foto });
        res.status(201).json({id: novo[0]});                                                    // statusCode indica create
    }catch(error){
        res.status(400).json({msg: error.message});                                             // retorna status code de erro msg
    }
});

//Metodo put é usado para a alteração, id indica o registro a ser alterado
router.put("/:id", async(req, res) =>{
    const id = req.params.id;           // ou const {id} = req.params
    const {preco} = req.body;           // cmapo a ser alterado

    try{
        // altera o campo preco, no registro cujo id coincidir com o parametro passado
        await dbKenx("livros").update({preco}).where("id", id);                                     // ou where({id})
        res.status(200).json();                                                                     // statusCode que indica OK
    }catch(error){
        res.status(400).json({msg: error.message});                                                 // stataus que indica erro na requisição
    }
});

// Metodo delete é usado para exclusão
router.delete("/:id", async(req, res) => {
    const {id} = req.params;                                                                        // id do registro a ser excluido
    try{
        await dbKenx("livros").del().where({id});
        res.status(200).json();                                                                     // statusCode que indica OK
    }catch(error){
        res.status(400).json({msg: error.message});                                                 // retorna status de erro e msg
    }
});

// Filtro por Titulo ou autor
router.get("/filtro/:palavra", async(req, res) => {
    const palavra = req.params.palavra;                                                             // palavra do titulo ou autor a pesquisar
    try{
    // para filtrar registros, utilizase .where(), com suas variaveis 
    const livros = await dbKenx("livros")
        .where("titulo", "like", `%${palavra}%`)
        .orWhere("autor", "like", `%${palavra}%`);
    res.status(200).json(livros);
    }catch(error){
        res.status(400).json({msg: error.message});
    }
});
//Resumo do cadastro de livros
router.get("/dados/resumo", async(req, res) =>{
    try{
        // metodos que podem ser utilizados para obter dados estatisticos da tabela
        const consulta = await dbKenx("livros")
            .count({num: "*"})
            .sum({soma: "preco"})
            .mas({maior: "preco"})
            .avg({media: "preco"});
        const {num, soma, maior, media} = consulta[0];
        res.status(200).json({num, soma, maior, media: Number(media.toFixed(2))})
    }catch(error){
        res.status(400).json({msg: error.message});
    }
});
//Soma dos preços, agrupados por ano
router.get("/dados/grafico", async(req, res) =>{
    try{
    // obtem ano e soma de preço dos livros (com o nome total, agrupados por ano)
    const totalPorAno = await dbKenx("livros").select("ano")
        .sum({total: "preco"}).groupBy("ano");
    res.status(200).json(totalPorAno);
    }catch(error){
        res.status(400).json({msg: error.message});
    }
});
module.exports = router;