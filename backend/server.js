const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/middleware");
const connectDB = require("./conn/db");
const port = process.env.PORT || 6000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/routes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port no ${port}`));
