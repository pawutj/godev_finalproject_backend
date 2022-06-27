const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: Sequelize.STRING,
    },

    price: {
      type: Sequelize.INTEGER,
    },

    product_cat: {
      // 0 อื่น ๆ   1 เสื้อ   2 กางเกง    3 กระโปรง   4 รองเท้า    5 เครื่องประดับ
      type: Sequelize.INTEGER,
    },

    stock: {
      type: Sequelize.INTEGER,
    },

    product_detail: {
      type: Sequelize.STRING,
    },

    color: {
      type: Sequelize.STRING,
    },

    size: {
      type: Sequelize.STRING,
    },

    image: {
      type: Sequelize.STRING,
    },
  });

  return Product;
};
