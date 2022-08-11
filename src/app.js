const express = require("express");
const routes = require("./routes/index");
require("dotenv").config();

const port = process.env.SERVER_PORT || 8080;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server running on port:" + port);
});
