const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // soln1
  //   fs.readFile("../text.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // soln 2 streams
  //   const readable = fs.createReadStream("../text.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });

  // soln 3
  const readable = fs.createReadStream("../text.txt");
  readable.pipe(res);
  //   readableSource.pipe(writableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
