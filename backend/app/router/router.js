const { ROLES } = require("../../utils/constants");
const { authorize } = require("../http/middlewares/permission.guard");
const {
  verifyAccessToken,
  isVerifiedUser,
} = require("../http/middlewares/user.middleware");
const expressAsyncHandler = require("express-async-handler");
const { adminRoutes } = require("./admin/admin.routes");
const { categoryRoutes } = require("./category");
const { projectRoutes } = require("./project");
const { proposalRoutes } = require("./proposal");
const { userAuthRoutes } = require("./userAuth");
const { ProjectController } = require("../http/controllers/project.controller");


const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/category", categoryRoutes);
// ✅ مسیر عمومی برای لیست پروژه‌ها
router.get(
  "/project/list",
  expressAsyncHandler(ProjectController.getListOfProjects)
);
router.use(
  "/project",
  verifyAccessToken,
  isVerifiedUser,
  // authorize(ROLES.ADMIN, ROLES.OWNER),
  projectRoutes
);
router.use("/proposal", verifyAccessToken, isVerifiedUser, proposalRoutes);
router.use(
  "/admin",
  verifyAccessToken,
  isVerifiedUser,
  authorize(ROLES.ADMIN),
  adminRoutes
);

module.exports = {
  allRoutes: router,
};
