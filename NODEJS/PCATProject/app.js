const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");
// express'e template engine olarak ejs kullanacağımızı söylüyoruz.
// ejs, klasör yapımızdaki views klasörünün içerisine bakar. temp klasörünü views olarak değiştirdik.

//MIDDLEWARES
app.use(express.static("public")); //express.static => a middleware function in express.

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
