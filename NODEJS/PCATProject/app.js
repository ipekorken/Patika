const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Photo = require("./models/Photo");

const app = express();

mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set("view engine", "ejs");
// express'e template engine olarak ejs kullanacağımızı söylüyoruz.
// ejs, klasör yapımızdaki views klasörünün içerisine bakar. temp klasörünü views olarak değiştirdik.

//MIDDLEWARES
app.use(express.static("public")); //express.static => a middleware function in express.

app.use(express.urlencoded({ extended: true })); // => aldığımız requesti sonlandırmamıza yardımcı oldu. url'deki datayı okumamızı sağlar.
app.use(express.json()); // => aldığımız requesti sonlandırmamıza yardımcı oldu. url'deki datayı json formatına dönüştürmemizi sağlar.

//ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  //console.log(req.body);
  await Photo.create(req.body); //req.body 'i veritabanına gönderecek.
  res.redirect("/"); // tekrar anasayfaya dönelim dedik.
});
// fonksiyonu async yazarak asenkron yaptık böylece model yardımıyla veritabınında oluşturduğumuz döküman olana kadar await durumda bekleyecek.

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
