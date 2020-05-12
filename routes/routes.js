"use strict";

const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get("/endpoint", (req, res) => {
  queries.endpoint
    .getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.get("/endpoint/:id", (req, res) => {
  queries.endpoint
    .getOne(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.post("/endpoint", (req, res) => {
  queries.endpoint
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
