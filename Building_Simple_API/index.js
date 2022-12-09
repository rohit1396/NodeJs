const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");
const objData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello from server Side");
  } else if (pathName === "/product") {
    res.end("This is product page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found ! </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to other Ports");
});
