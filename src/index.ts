const cors = require('cors');
import express = require("express");
import bodyParser = require("body-parser");

import { createConnection } from "typeorm";

const groupRoutes = require("./routes/groupRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const expenseRoutes = require("./routes/expenseRoutes")

const port = process.env.PORT || 3000; 

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/groupe', groupRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/expense', expenseRoutes);

createConnection()

app.listen(port, () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
});