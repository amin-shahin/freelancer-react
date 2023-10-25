const expressAsyncHandler = require("express-async-handler");
const { ProjectController } = require("../http/controllers/project.controller");
const { verifyAccessToken } = require("../http/middlewares/user.middleware");

const router = require("express").Router();

router.get("/list", expressAsyncHandler(ProjectController.getListOfProjects));
router.post(
  "/add",
  verifyAccessToken,
  expressAsyncHandler(ProjectController.addNewProject)
);
router.get("/:id", expressAsyncHandler(ProjectController.getProjectById));
router.patch("/:id", expressAsyncHandler(ProjectController.changeProjectStatus));

module.exports = {
  projectRoutes: router,
};
