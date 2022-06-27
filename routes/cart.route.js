module.exports = (app) => {
  const cart = require("../controllers/cart.controller");

  var router = require("express").Router();

  router.get("/findAll", cart.findAll);
  router.post("/create", cart.create);
  app.use("/api/cart", router);
};
