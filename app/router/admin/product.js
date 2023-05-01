const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
// const {
//   ProductController,
// } = require("../../http/controllers/admin/product/product.controller");

// router.post("/add", expressAsyncHandler(ProductController.addNewProduct));

module.exports = {
  productsAdminRoutes: router,
};
