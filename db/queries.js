"use strict";

const knex = require("./knex");

module.exports = {
  endpoint: {
    getAll: () => {
      return knex("endpoint");
    },
    getOne: (id) => {
      return knex("endpoint/id").where("id", id).first();
    },
    create: (item) => {
      return knex("endpoint").insert(item).returning("*");
    },
  },
};
