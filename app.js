require("dotenv").config({ path: "./.env" });

const express = require("express");
const routes = require("./src/routes");
const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => {
  console.log("Server started on port " + process.env.APP_PORT);
});
