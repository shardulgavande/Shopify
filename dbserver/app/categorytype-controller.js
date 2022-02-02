const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const CategoryType = db.CategoryType;

exports.findAll=(req,resp)=>{
  CategoryType.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.createCategoryType=(req,resp)=>{

    if (!req.body.type_name){
        resp.status(400)
        .send({message:"CategoryType Name to be provided"});
        return;
    }
    const newCategoryType={

        type_name: req.body.type_name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newCategoryType');
    CategoryType.create(newCategoryType)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};

exports.updateCategoryType=(req,resp)=>{
  const c_id=parseInt(req.params.id);
    console.log('body');
    console.log(req.body);
    SubCategories.update(req.body,{ where:{ id:c_id}})
        .then(num => {
            console.log('num ' +num);
            if(num == 1){
                resp.send({message:`SubCategory with id ${c_id} updated sucessfully`});
            }
            else{
                resp.send({message:`SubCategory with id ${c_id} not updated sucessfully`});
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving SubCategory data"
            });
        });
};

exports.findByPK=(req,resp)=>{
  const id=parseInt(req.params.id);
    CategoryType.findByPk(id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.deleteCategoryType=(req,resp)=>{
    const c_id = parseInt(req.params.id);
    console.log(c_id);
    CategoryType.destroy({where:{id:c_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `CategoryType with id=${c_id} deleted successfully!` });
        } else {
          resp.send({ message: `CategoryType delete with id=${c_id}. Maybe CategoryType was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete CategoryType with id=" + c_id
        });
      });
};
