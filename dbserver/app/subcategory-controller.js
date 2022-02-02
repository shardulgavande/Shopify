const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const SubCategories = db.SubCategory;

exports.findAll=(req,resp)=>{
  SubCategories.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createSubCategories=(req,resp)=>{

    if (!req.body.sc_name){
        resp.status(400)
        .send({message:"SubCategory Name to be provided"});
        return;
    }
    const newSubCategories={
        id:req.body.id,
        cat_id:req.body.cat_id,
        sc_name: req.body.sc_name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newSubCategories');
    SubCategories.create(newSubCategories)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};

exports.updateSubCategories=(req,resp)=>{
    const cat_id = parseInt(req.params.id);
    console.log('body');
    console.log(req.body);
    SubCategories.update(req.body,{ where:{ id:cat_id}})
        .then(num => {
            console.log('num ' +num);
            if(num == 1){
                resp.send({message:`SubCategory with id ${cat_id} updated sucessfully`});
            }
            else{
                resp.send({message:`SubCategory with id ${cat_id} not updated sucessfully`});
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving SubCategory data"
            });
        });
};

exports.findByPK=(req,resp)=>{
    const cat_id = parseInt(req.params.id);
    SubCategories.findByPk(cat_id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.deleteSubCategories=(req,resp)=>{
    const cat_id = parseInt(req.params.id);
    console.log(cat_id);
    SubCategories.destroy({where:{id:cat_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `SubCategory with id=${cat_id} deleted successfully!` });
        } else {
          resp.send({ message: `SubCategory delete with id=${cat_id}. Maybe SubCategory was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete SubCategory with id=" + cat_id
        });
      });
};
