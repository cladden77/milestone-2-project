// Modules
require("dotenv").config();
const express = require("express");

// Initialize
const app = express();
const dbConfig = require("./db");

// HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.send("home");
});

app.get("*", (req, res) => {
  res.status("<h1>404 Page</h1>");
});

// CONNECTION
app.listen(process.env.PORT);
