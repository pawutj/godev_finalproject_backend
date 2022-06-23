const db = require("../models");
const { User } = db;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    zipcode: req.body.zipcode,
    mobile: req.body.mobile,
  };

  User.create(user)
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
  User.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: { email: req.body.email, password: req.body.password },
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
