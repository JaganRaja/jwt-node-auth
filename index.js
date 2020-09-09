//jk
//https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens

require("dotenv").config; // Sets up dotenv as soon as our application starts

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; //development
const stage = require("./config")[environment];

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

if (environment !== "production") {
  app.use(logger("dev"));
}

// app.use("/app/v1", (req, res, next) => {
//   res.send("JK");
//   next();
// });

// app.use("/app/v1", (req, res, next) => {
//   res.send("JK-Hello");
//   next();
// });

app.use("/api/v1", routes(router));

app.listen(`${stage.port}`, () => {
  console.log(`server now listening at local host ${stage.port}`);
});

module.export = app;
