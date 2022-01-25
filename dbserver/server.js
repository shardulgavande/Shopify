const express = require('express');
const server = express();
const port = 3000;
const  cors = require('cors');
const {response} = require('express');

const CORS_OPTIONS = {
    origin:"http://localhost:4200",
    optionSucessStatus: 200
};
server.use(express.json())
server.use(express.urlencoded({extended:true}));  //to get data in body as key value
server.use(cors(CORS_OPTIONS));

server.get('',(req,resp)=>{

    resp.send("express data");

});

const Products = [
    {
        id: 1,
        name: "Mens Casual Premium Slim Fit T-Shirt",
        price: 109.95,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 5,
        category: "men"
    },
    {
        id: 2,
        name: "Mens Casual Premium Slim Fit T-Shirt",
        price: 109.95,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        quantity: 5,
        category: "men"
    },
    {
        id: 3,
        name: "Mens Casual Premium Slim Fit T-Shirt",
        price: 109.95,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        quantity: 5,
        category: "men"
    },
    {
        id: 4,
        name: "Mens Casual Premium Slim Fit T-Shirt",
        price: 109.95,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 5,
        category: "men"
    },
];


server.get('/products',(req,resp)=>{

    resp.setHeader("Content-Type","application/json");
    console.log(Products);
    resp.send(Products);
});

server.listen(port,()=>{

    console.log("http://localhost:3000/ started ");

});