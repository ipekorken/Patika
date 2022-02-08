const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// connect db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema); // mongoose, "Photo" yu küçük harfli ve çoğul yaparak collection oluşturur.

// create a photo
// Photo.create({
//   title: "Photo Title 2",
//   description: "Photo Description 2",
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update a photo
// const id = "62022d96475d3e1fa390c7f9";

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Photo 111 title updated",
//     description: "Photo 111 description updated",
//   },
//   {
//     new: true, // bunu yazmazsak db de objemiz güncellenir ancak console log da eski hali görünür.
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
const id = "62022f6defb3cff8feb79cc4";
Photo.findByIdAndDelete(id, (err, data) => {
  console.log("Photo is deleted");
});
