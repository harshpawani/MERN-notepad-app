const express = require("express");
const app = express();
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
// app.listen(5000, console.log('Server Started on port 5000'));