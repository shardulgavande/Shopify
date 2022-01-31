const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const Carts = db.Cart;

exports.findAll=(req,resp)=>{
    Carts.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};


exports.createCart=(req,resp)=>{

    
    const newCart={
    
        uid:req.body.uid,
        pid:req.body.pid,
        pname:req.body.pname,
        pprice: req.body.pprice,
        pdesc: req.body.pdesc,
        pimage: req.body.pimage,
        pquantity: req.body.pquantity,
        createdAt: new Date(),
        updatedAt: new Date() 
    }
    console.log('newCart');
    Carts.create(newCart)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};