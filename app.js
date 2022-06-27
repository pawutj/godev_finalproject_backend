const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json("ping");
});

const db = require("./models");
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Sync DB");
});

require("./routes/product.route")(app);
require("./routes/user.route")(app);
require("./routes/cart.route")(app);
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001, () => {
  console.log("port 3001 ");
});
