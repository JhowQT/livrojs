/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
  return knex("livros").del()
    .then(function(){
      return knex("livros").insert([
        {
          titulo: "Web Design Responsivo", autor: "Mauricio Samy Silva", ano: 2014,
          preco:73.0, foto:"https://s3.novatec.com.br/capas/9788575223925.jpg",
        },
        {
          titulo:"Proteção de Dados", autor:"W. Curtis Preston", ano: 2021,
          preco:97.0, foto:"https://s3.novatec.com.br/capas/9786586057843.jpg",
        },
        {
          titulo:"SQL em 10 minutos por Dia", autor:"Ben Forta", ano:2021,
          preco:79.0, foto:"https://s3.novatec.com.br/capas/9786586057447.jpg",
        },
        {
          titulo:"CSS Grid Layout", autor:"Mauricio Samy Silva", ano:2017,
          preco:45.0, foto:"https://s3.novatec.com.br/capas/9788575226322.jpg",
        },
        {
          titulo:"Python para análise de dados", autor:"Wes McKinney", ano:2018,
          preco:132.0, foto:"https://s3.novatec.com.br/capas/9788575226476.jpg",
        },
      ]);
    });
};
