const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/davinci.sql`);

const knex = require('knex')({
  dialect: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'davinci',
    multipleStatements: true
  }
});

knex.raw('CREATE DATABASE IF NOT EXISTS davinci;')
.then(() => knex.raw(sql))
.catch((err)=>{
  console.log(err);
});