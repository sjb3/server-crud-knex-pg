"use strict";

const knex = require("knex");
const environment = "development";
const config = require("../knexfile");
const environmentConfig = config[environment];

// console.log(config);
const connnection = knex(environmentConfig);

module.exports = connnection;
