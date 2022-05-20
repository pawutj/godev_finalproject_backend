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

require("./routes/product.route")(app);

app.listen(3001, () => {
  console.log("port 3001 ");
});
