module.exports = (app) => {
  const user = require("../controllers/user.controller");

  var router = require("express").Router();

  router.get("/findAll", user.findAll);
  router.post("/create", user.create);
  router.post("/login", user.login);
  app.use("/api/user", router);
};
