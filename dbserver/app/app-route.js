module.exports=(app)=>{
  const express=require('express');
  const ROUTER=express.Router();

 
  const ProductsController = require('./products-controller');
  const UserController=require('./user-controller');
  const AdminController=require('./admin-controller');
  const CartController = require('./cart-controller');
  const SubCategoryController = require('./subcategory-controller');
  const CategoryTypeController = require('./categorytype-controller');

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

      /*SubCategory Route*/
      ROUTER.get('/subcategories',SubCategoryController.findAll);
      ROUTER.get('/subcategories/:id',SubCategoryController.findByPK);
      ROUTER.post('/subcategories/add',SubCategoryController.createSubCategories);
      ROUTER.put('/subcategories/update/:id',SubCategoryController.updateSubCategories);
      ROUTER.delete('/subcategories/delete/:id',SubCategoryController.deleteSubCategories);

      /*CategoryTypes Route*/
      ROUTER.get('/categorytypes',CategoryTypeController.findAll);
      ROUTER.get('/categorytypes/:id',CategoryTypeController.findByPK);
      ROUTER.post('/categorytypes/add',CategoryTypeController.createCategoryType);
      ROUTER.put('/categorytypes/update/:id',CategoryTypeController.updateCategoryType);
      ROUTER.delete('/categorytypes/delete/:id',CategoryTypeController.deleteCategoryType);

  app.use('/app',ROUTER);

}
