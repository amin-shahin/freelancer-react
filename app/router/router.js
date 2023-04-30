const { adminRoutes } = require("./admin/admin.routes");
const { userAuthRoutes } = require("./user.routes");

const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/admin", adminRoutes);
module.exports = {
  allRoutes: router,
};
