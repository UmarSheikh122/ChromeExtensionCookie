const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index.js")
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes)

// GET endpoint to retrieve the array of objects

// POST endpoint to add new objects to the array

const port = 3000;

const CONNECTION_URL = process.env.CONNECTION_URL;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_URL);
    app.listen(port, console.log("SERVER is running"));
  } catch (error) {
    console.log("error: ", error);
  }
};
start();