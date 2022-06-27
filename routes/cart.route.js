module.exports = (app) => {
  const cart = require("../controllers/cart.controller");

  var router = require("express").Router();

  router.get("/findAll", cart.findAll);
  router.post("/create", cart.create);
  router.post("/checkOut", cart.checkOut);
  app.use("/api/cart", router);
};
