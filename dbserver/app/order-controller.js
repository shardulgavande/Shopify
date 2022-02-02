const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const Orders = db.Order;

exports.findAll=(req,resp)=>{
    Orders.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createOrder=(req,resp)=>{

  
    const newOrder={
        id:req.body.id,
        ordernumber:req.body.ordernumber,
        uid:req.body.uid,
        address:req.body.address,
        ordertotal:req.body.ordertotal,
        odate:req.body.odate,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newOrder');
    Orders.create(newOrder)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};