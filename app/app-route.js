module.exports=(app)=>{
    const express = require('express');
    const ROUTER = express.Router();
    const ProductsController = require('./products-controller');
    
    /*Products Route*/ 
    ROUTER.get('/products',ProductsController.findAll);
    ROUTER.get('/products/:id',ProductsController.findByPK);
    ROUTER.post('/products/add',ProductsController.createProducts);
    ROUTER.put('/products/update/:id',ProductsController.updateProducts);
    ROUTER.delete('/products/delete/:id',ProductsController.deleteProducts);
    
    app.use('/app',ROUTER);
}