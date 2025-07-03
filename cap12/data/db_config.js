const knex = require('knex');
const config = require("../knexfile.js");
const dbKenx = knex(config.development);
module.exports = dbKenx;
