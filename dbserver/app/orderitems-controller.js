const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const OrderItems = db.OrderItems;

exports.findAll=(req,resp)=>{
    OrderItems.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createOrderItems=(req,resp)=>{

  
    const newOrderItems={
        id:req.body.id,
        oid:req.body.oid,
        pid:req.body.pid,
        pname:req.body.pname,
        pprice:req.body.pprice,
        pquantity:req.body.pquantity,
        ptotal:req.body.ptotal,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newOrderItems');
    OrderItems.create(newOrderItems)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};