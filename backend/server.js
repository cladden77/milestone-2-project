// Initialize
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/appointment"))

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

// get driver connection
const dbo = require("./db/conn");

// CONNECTION
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

// HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.send("home");
});

app.get("*", (req, res) => {
  res.status("<h1>404 Page</h1>");
});