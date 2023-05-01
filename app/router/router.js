const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const { adminRoutes } = require("./admin/admin.routes");
const { cartRoutes } = require("./cart");
const { categoryRoutes } = require("./category");
const { productRoutes } = require("./product");
const { userAuthRoutes } = require("./user.routes");

const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/cart", verifyAccessToken, cartRoutes);
router.use("/admin", adminRoutes);

module.exports = {
  allRoutes: router,
};
