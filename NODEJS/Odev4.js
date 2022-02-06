const fs = require("fs");

// create
fs.writeFile(
  "employees.json",
  '[{"name": "Employee1", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
  }
);

// read
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// update
fs.appendFile(
  "employees.json",
  ',{ "name": "Employee2", "salary": 5000 }]',
  "utf8",
  (err) => {
    if (err) console.log(err);
  }
);

//delete
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
