const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const IdeaRoutes = require("./routes/idea");
// const resultsRoutes = require("./routes/results");
// const ProductRoutes = require("./routes/product");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");


const app = express();

mongoose
  .connect(
    "mongodb+srv://kradekidrahul:abc1243@cluster0.cx9gl7f.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/ideas", IdeaRoutes);
// app.use("/api/results", resultsRoutes);
app.use("/api/shop", productRoutes);
app.use("/api/order", orderRoutes);


module.exports = app;
