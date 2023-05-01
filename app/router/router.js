const { adminRoutes } = require("./admin/admin.routes");
const { categoryRoutes } = require("./category");
const { productRoutes } = require("./product");
const { userAuthRoutes } = require("./user.routes");

const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/admin", adminRoutes);

module.exports = {
  allRoutes: router,
};
