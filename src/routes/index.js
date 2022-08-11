const express = require("express");
const routes = express.Router();

const Blockchain = require("../Blockchain/blockchain");
const blockChain = new Blockchain();

routes.get("/blocks", (req, res) => {
  res.json(blockChain.chain);
});

routes.post("/blocks", (req, res) => {
  let { data } = req.body;
  blockChain.addBlock(data);
  res.redirect("/blocks");
});

module.exports = routes;
