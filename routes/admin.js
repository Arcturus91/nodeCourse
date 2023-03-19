const path = require("path");
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

const products = [];

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;

/* 
la diferencia entre hacer esto:

router.get('/add-product', productsController.getAddProduct);

y router.get('/add-product', productsController.getAddProduct());

es que node ejecutaría getAddProduct como una función del productsController object. En dicho caso,
 el this del getAddProduct tomaría como referencia al productsController. Recuerda que Node lee todo la app cuando armar el server.

 Pero, cuando le pasamos solamente la referencia, es decir, sin (), cuando router.get sea 
 ejecutado, productsController.getAddProduct tomará como referencia el this de express.
 EL this de express está relacionado al response object: res


By default, Express sets the context (the this keyword) of the controller function to the
response object (res) that is passed to the controller function. This means that any
references to this within the controller function will refer to the res object.
So, when you pass a reference to the getAddProduct function in the get method, 
it will be executed with the this keyword bound to the res object,
not the productsController object.

The getAddProduct() function will be executed immediately when the
 server starts up because the parentheses at the end of getAddProduct()
  cause the function to be called immediately.

*/
