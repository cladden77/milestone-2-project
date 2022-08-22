const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
.connect(`mongodb+srv://atlascluster.x7zogyl.mongodb.net/?retryWrites=true&w=majority`, { user: process.env.MONGODB_USER, pass: process.env.MONGODB_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000);
    console.log("Database is connected! Listening to localhost 3000");
  })
  .catch((err) => console.log(err));
