// Modules
require("dotenv").config();
const express = require("express");

// Initialize
const app = express();

// HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.send("HOLA");
});

app.get("*", (req, res) => {
  res.status("<h1>404 Page</h1>");
});

// CONNECTION
app.listen(process.env.PORT);
