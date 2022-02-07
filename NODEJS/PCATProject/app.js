const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const photo = [
    {
      id: 1,
      name: "Photo Name",
      description: "Photo description",
    },
    {
      id: 2,
      name: "Photo Name 2",
      description: "Photo description 2",
    },
  ];
  res.send(photo);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
