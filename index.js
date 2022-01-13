const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(8500, () => {
  console.log("SERVER IS RUNNING");
});
