const { categoryAdminRoutes } = require("./category");
const { productsAdminRoutes } = require("./product");

const router = require("express").Router();

router.use("/category", categoryAdminRoutes);
router.use("/product", productsAdminRoutes);

module.exports = {
  adminRoutes: router,
};
