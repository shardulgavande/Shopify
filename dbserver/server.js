const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');
//const res = require('express/lib/response');
const CORS_OPTIONS = {origin:"http://localhost:4200"};

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(CORS_OPTIONS));
//Synching with server
const db = require('./models');
db.sequelize.sync();

require('../app/app-route')(server);

server.get('/',(req,res)=>{
    res.send({message:"Welcome to express postgre"});
})


server.listen(port,()=>{

    console.log(`http://localhost:${port} started`);

})