const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const { adminRoutes } = require("./admin/admin.routes");
const { categoryRoutes } = require("./category");
const { projectRoutes } = require("./project");
const { proposalRoutes } = require("./proposal");
const { userAuthRoutes } = require("./user");

const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/category", categoryRoutes);
router.use("/project", verifyAccessToken, projectRoutes);
router.use("/proposal", verifyAccessToken, proposalRoutes);
router.use("/admin", verifyAccessToken, adminRoutes);

module.exports = {
  allRoutes: router,
};
