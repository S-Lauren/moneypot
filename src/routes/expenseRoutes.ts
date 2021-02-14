
import express from 'express';
import expenseController = require("../controllers/expenseController");


const router = express.Router();

router.get("/:groupeId/:categoryId", expenseController.showSplitExpense)
router.post("/", expenseController.addExpense);
router.get("/", expenseController.findAllExpenses);
router.delete("/:id", expenseController.deleteExpenses);
module.exports = router;