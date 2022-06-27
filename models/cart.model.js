const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    cart_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: Sequelize.INTEGER,
    },

    status: {
      type: Sequelize.STRING,
    },
  });

  return Cart;
};
