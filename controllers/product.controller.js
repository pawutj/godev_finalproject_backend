const db = require("../models");
const { Product } = db;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  const product = {
    product_name: req.body.product_name,
    price: req.body.price,
  };

  Product.create(product)
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
  Product.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.findById = (req, res) => {
  Product.findOne({
    where: { product_id: req.param("product_id") },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.update = async (req, res) => {
  const product = {
    product_name: req.body.product_name,
    price: req.body.price,
  };

  try {
    const oldProduct = await Product.findOne({
      where: { product_id: req.param("product_id") },
    });

    oldProduct.set({
      ...product,
    });

    const data = await oldProduct.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.cutStock = async (req, res) => {
  try {
    const oldProduct = await Product.findOne({
      where: { product_id: req.param("product_id") },
    });

    oldProduct.set({
      ...oldProduct,
      stock: oldProduct.stock - 1,
    });

    const data = await oldProduct.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.delete = (req, res) => {
  Product.destroy({
    where: {
      product_id: req.param("product_id"),
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
