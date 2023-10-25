const { ROLES } = require("../../../utils/constants");
const { authorize } = require("../../http/middlewares/permission.guard");
const { categoryAdminRoutes } = require("./category");
const { userAdminRoutes } = require("./user");

const router = require("express").Router();

router.use("/category", categoryAdminRoutes);
// router.use("/product", authorize(ROLES.ADMIN), productsAdminRoutes);
// router.use("/coupon", authorize(ROLES.ADMIN), couponAdminRoutes);
router.use("/user", authorize(ROLES.ADMIN), userAdminRoutes);
// router.use("/payment", authorize(ROLES.ADMIN), paymentAdminRoutes);

module.exports = {
  adminRoutes: router,
};
