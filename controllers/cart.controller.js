const db = require("../models");
const { Cart } = db;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  const cart = {
    product_id: req.body.product_id,
    user_id: req.body.user_id,
    status: "unpaid",
  };

  Cart.create(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.findAll = (req, res) => {
  Cart.findAll({ include: [{ model: db.Product }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
