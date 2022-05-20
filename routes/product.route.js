module.exports = (app) => {
  const product = require("../controllers/product.controller");

  var router = require("express").Router();

  router.get("/findAll", product.findAll);
  router.post("/create", product.create);
  router.get("/findById/:product_id", product.findById);
  router.post("/update/:product_id", product.update);
  router.delete("/delete/:product_id", product.delete);
  app.use("/api/product", router);
};
