const expressAsyncHandler = require("express-async-handler");
const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const {
  ProposalController,
} = require("../http/controllers/proposal.controller");

const router = require("express").Router();

router.get("/list", expressAsyncHandler(ProposalController.getListOfProposals));
router.post(
  "/add",
  verifyAccessToken,
  expressAsyncHandler(ProposalController.addNewProposal)
);
router.get("/:id", expressAsyncHandler(ProposalController.getProposalById));
router.patch(
  "/:id",
  expressAsyncHandler(ProposalController.changeProposalStatus)
);

module.exports = {
  proposalRoutes: router,
};
