const adminRoutes = require("./admin/admin.routes");

const router = require("express").Router();

router.use("/admin", adminRoutes);

module.exports = {
  allRoutes: router,
};
