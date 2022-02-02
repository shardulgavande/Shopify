module.exports=(app)=>{
  const express=require('express');
  const ROUTER=express.Router();

 
  const ProductsController = require('./products-controller');
  const UserController=require('./user-controller');
  const AdminController=require('./admin-controller');
  const CartController = require('./cart-controller');
  const CategoryController=require('./category-controller');

    /*Products Route*/
    ROUTER.get('/products',ProductsController.findAll);
    ROUTER.get('/products/:id',ProductsController.findByPK);
    ROUTER.post('/products/add',ProductsController.createProducts);
    ROUTER.put('/products/update/:id',ProductsController.updateProducts);
    ROUTER.delete('/products/delete/:id',ProductsController.deleteProducts);

    /*User Route*/
   ROUTER.get('/users',UserController.findAll);
   ROUTER.get('/users/:id',UserController.findByPk);
   ROUTER.post('/users/add',UserController.create);
   ROUTER.put('/users/update/:id',UserController.update);
   ROUTER.delete('/users/delete/:id',UserController.delete);

    /*Admin Route*/
    ROUTER.get('/admins',AdminController.findAll);
    ROUTER.get('/admins/:id',AdminController.findByPk);
    ROUTER.post('/admins/add',AdminController.create);
    ROUTER.put('/admins/update/:id',AdminController.update);
    ROUTER.delete('/admins/delete/:id',AdminController.delete);

    /* Cart Router */
    ROUTER.post('/cart/add', CartController.createCart);
    ROUTER.get('/cart', CartController.findAll);

     /*Category Route*/
    ROUTER.get('/category',CategoryController.findAll);
    ROUTER.get('/category/:id',CategoryController.findByPK);
    ROUTER.post('/category/add',CategoryController.createCategory);
    ROUTER.put('/category/update/:id',CategoryController.updateCategory);
    ROUTER.delete('/category/delete/:id',CategoryController.deleteCategory);

  app.use('/app',ROUTER);

}
