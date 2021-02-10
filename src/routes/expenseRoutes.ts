// api / expense /: memberId / category /: categoryId

import express from 'express';
import expenseController = require("../controllers/expenseController");


const router = express.Router();

router.post("/", expenseController.addExpense);
router.get("/", expenseController.findAllExpenses);

module.exports = router;