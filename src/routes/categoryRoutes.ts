
import express from 'express';
import categoryController = require("../controllers/categoryController");


const router = express.Router();

router.post("/", categoryController.createCategory);

module.exports = router;
