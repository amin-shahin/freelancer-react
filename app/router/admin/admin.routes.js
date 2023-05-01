const { ROLES } = require("../../../utils/constants");
const { authorize } = require("../../http/middlewares/permission.guard");
const { categoryAdminRoutes } = require("./category");
const { couponAdminRoutes } = require("./coupon");
const { productsAdminRoutes } = require("./product");

const router = require("express").Router();

router.use("/category", authorize(ROLES.ADMIN), categoryAdminRoutes);
router.use("/product", authorize(ROLES.ADMIN), productsAdminRoutes);
router.use("/coupon", authorize(ROLES.ADMIN), couponAdminRoutes);

module.exports = {
  adminRoutes: router,
};
