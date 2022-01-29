const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../dbserver/models');
const Products = db.Products;

exports.findAll=(req,resp)=>{
    Products.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createProducts=(req,resp)=>{

    if (!req.body.pname){
        resp.status(400)
        .send({message:"Product Name to be provided"});
        return;
    }
    const newProducts={
        id:req.body.id,
        pname:req.body.pname,
        pprice: req.body.pprice,
        pdesc: req.body.pdesc,
        pimage: req.body.pimage,
        pquantity: req.body.pquantity,
        subcat_id: req.body.subcat_id,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newProducts');
    Products.create(newProducts)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};

exports.updateProducts=(req,resp)=>{
    const pid = parseInt(req.params.id);
    console.log('body');
    console.log(req.body);
    Products.update(req.body,{ where:{ id:pid }})
        .then(num => {
            console.log('num ' +num);
            if(num == 1){
                resp.send({message:`Product with id ${pid} updated sucessfully`});
            }
            else{
                resp.send({message:`Product with id ${pid} not updated sucessfully`});
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving product data"
            });
        });
};

exports.findByPK=(req,resp)=>{
    const pid = parseInt(req.params.id);
    Products.findByPk(pid)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.deleteProducts=(req,resp)=>{
    const p_id = parseInt(req.params.id);
    console.log(p_id);
    Products.destroy({where:{id:p_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `Product with id=${p_id} deleted successfully!` });
        } else {
          resp.send({ message: `Product delete with id=${p_id}. Maybe Product was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete Product with id=" + p_id
        });
      });
};