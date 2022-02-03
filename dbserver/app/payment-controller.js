const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
// orderid=require('order-id')('key');
// id =this.orderid.generate();

const Payment = db.Payment;

exports.findAll=(req,resp)=>{
    Payment.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createPayment=(req,resp)=>{


    const newPayment={
        id:req.body.id,
        oid:req.body.oid,
        uid:req.body.uid,
        status:req.body.status,
        paymentmode:req.body.paymentmode,
        date:req.body.date,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newPayment');
    Payment.create(newPayment)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};
