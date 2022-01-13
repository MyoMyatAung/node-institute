const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8500;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/hello", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING: ${PORT}`);
});
