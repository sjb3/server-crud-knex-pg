"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const endpoint = require("./routes/routes");

app.use(endpoint);
// from the docs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
