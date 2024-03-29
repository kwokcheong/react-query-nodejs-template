const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ data: "Hello world" });
});

app.get("/test", (req, res) => {
  res.json({
    data: "Hello world this is coming from test endpoint huh no change?",
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
