require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const mysql = require("mysql");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "morgan.log"),
  { flags: "a" }
);

app.use(helmet());
app.use(morgan("dev", { stream: accessLogStream }));

let connection = mysql.createConnection({
  //properties
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: "ecomProject"
});
//inner joins product and price table on the product_id foreign key
const database = `SELECT products.product_name, products.product_description, product_category,products.product_image, price.price FROM products INNER JOIN price ON products.product_id = price.price_id`;

connection.connect(error => {
  if (error) {
    console.log("ERROR - Did not connect to the SQL Server");
    console.log(error);
  } else {
    console.log("connected to mySQL server");
  }
});

app.get("/", (req, res) => {
  res.send(`connected to port ${PORT}`);
});
//gets all of the contacts in the contact table
app.get("/api/contact", (req, res) => {
  console.log("contact request successful");
  connection.query("SELECT * FROM contacts", function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
//gets all the products in the products table
app.get("/api/products", (req, res) => {
  console.log("product request successful");
  connection.query(database, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
//gets a selected product by the specified query
app.get("/api/productfilter/:query", (req, res) => {
  const category = req.params.query;
  console.log(category);
  console.log("product query request successful");
  connection.query(
    "SELECT * FROM products WHERE product_category LIKE ?",
    [category],
    function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});
// will filter all products under whatever query is passed in
app.get("/api/pricefilter/:query", (req, res) => {
  const price = req.params.query;
  console.log(price);
  console.log("Price query request successful");
  connection.query(
    "SELECT products.*, price.price FROM products INNER JOIN price ON products.product_id = price.product_id WHERE price.price < ?;",
    [price],
    function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});
// express is listening to whatever port is passed in as a argument
app.listen(PORT, (err, req) => {
  if (err) {
    console.log("server error");
  } else {
    console.log(`server listening to port ${PORT}`);
  }
});

module.exports = app;
