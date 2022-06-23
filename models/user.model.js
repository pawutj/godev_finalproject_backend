const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    },

    first_name: {
      type: Sequelize.STRING,
    },

    last_name: {
      type: Sequelize.STRING,
    },

    address: {
      type: Sequelize.STRING,
    },

    city: {
      type: Sequelize.STRING,
    },

    country: {
      type: Sequelize.STRING,
    },

    zipcode: {
      type: Sequelize.STRING,
    },

    mobile: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
