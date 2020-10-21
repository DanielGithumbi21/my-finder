const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

mongoose.connect(
  "mongodb://127.0.0.1:27017/my-finder",
  { useNewUrlParser: true },
  () => {
    console.log("connected to the database");
  }
);
const postRoute = require("./routes/posts");
app.use("/post", postRoute);
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
