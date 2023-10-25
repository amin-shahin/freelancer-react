const { ROLES } = require("../../utils/constants");
const { authorize } = require("../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const { adminRoutes } = require("./admin/admin.routes");
const { categoryRoutes } = require("./category");
const { projectRoutes } = require("./project");
const { proposalRoutes } = require("./proposal");
const { userAuthRoutes } = require("./user");

const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/category", categoryRoutes);
router.use(
  "/project",
  verifyAccessToken,
  authorize(ROLES.ADMIN, ROLES.OWNER),
  projectRoutes
);
router.use("/proposal", verifyAccessToken, proposalRoutes);
router.use("/admin", verifyAccessToken, authorize(ROLES.ADMIN), adminRoutes);

module.exports = {
  allRoutes: router,
};
