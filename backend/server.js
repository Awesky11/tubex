const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./conn/db");
const port = process.env.PORT || 6000;

const requireAuth = require("./middleware/requireAuth");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.use("/api", require("./routes/authRoutes"));

app.use(requireAuth);

app.use("/api", require("./routes/videosRoutes"));

app.listen(port, () => console.log(`Server started on port no ${port}`));
