const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  console.log("server created");
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2> WELCOME TO INDEX PAGE </h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2> WELCOME TO ABOUT PAGE </h2>");
  } else if (url === "/info") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2> WELCOME TO INFO PAGE </h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2> 404 ERROR </h2>");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`port: ${port}`);
});
