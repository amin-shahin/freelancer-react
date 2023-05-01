const expressAsyncHandler = require("express-async-handler");
const {
  CategoryController,
} = require("../http/controllers/admin/category/category");

const router = require("express").Router();

router.get(
  "/list",
  expressAsyncHandler(CategoryController.getListOfCategories)
);

module.exports = {
  categoryRoutes: router,
};
