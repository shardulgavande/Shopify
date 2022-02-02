const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const Category = db.Category;

exports.findAll=(req,resp)=>{
    Category.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createCategory=(req,resp)=>{

    if (!req.body.c_name){
        resp.status(400)
        .send({message:"Category Name to be provided"});
        return;
    }
    const newCategory={
        id:req.body.id,
        type_id:req.body.type_id,
        c_name:req.body.c_name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newCategory');
    Category.create(newCategory)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};

exports.updateCategory=(req,resp)=>{
    const type_id = parseInt(req.params.id);
    console.log('body');
    console.log(req.body);
    Category.update(req.body,{ where:{ id:type_id }})
        .then(num => {
            console.log('num ' +num);
            if(num == 1){
                resp.send({message:`Category with id ${type_id} updated sucessfully`});
            }
            else{
                resp.send({message:`Category with id ${type_id} not updated sucessfully`});
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving Category data"
            });
        });
};

exports.findByPK=(req,resp)=>{
    const type_id = parseInt(req.params.id);
    Category.findByPk(type_id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.deleteCategory=(req,resp)=>{
    const type_id = parseInt(req.params.id);
    console.log(type_id);
    Category.destroy({where:{id:type_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `Category with id=${type_id} deleted successfully!` });
        } else {
          resp.send({ message: `Category delete with id=${type_id}. Maybe Category was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete Category with id=" + type_id
        });
      });
};
