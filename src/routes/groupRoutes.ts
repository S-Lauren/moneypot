
import express from 'express';
import groupController = require("../controllers/groupController");

const router = express.Router();

router.get("/", groupController.findAllGroups);
router.post("/:id/member/:memberId", groupController.sendInvitationLink);
router.post("/", groupController.createGroup);
router.delete("/:id", groupController.deleteGroup);
router.put("/:id", groupController.updateGroup);

module.exports = router;