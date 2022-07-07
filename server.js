const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// route
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

// app
const app = express();
app.use(cors());

// database
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => console.log("Database connection success!"))
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", blogRoutes);
app.use("/api", authRoutes);
// port
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
