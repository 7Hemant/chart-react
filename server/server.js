const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const ConneectDB = require("./db");
const dataSchema = require("./PostSchema");
mongoose.set("strictQuery", true);
const app = express();
app.use(bodyparser.json());
app.use(cors());

app.get("/", async (req, res) => {
  const data = await dataSchema.find();

  res.json({
    message: "post",
    post: data,
  });
});

ConneectDB().then(
  app.listen(5000, () => {
    console.log("running");
  })
);
