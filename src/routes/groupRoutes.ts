
import express from 'express';
import groupController = require("../controllers/groupController");


const router = express.Router();

router.get("/", groupController.findAllGroups);




module.exports = router;