const fs = require("fs");

fs.readFile("start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);

    fs.writeFile("./final.txt", `${data1}\n${data2}`, "utf-8", (err) => {
      console.log("Your file has been written");
    });
  });
});

console.log("Will read file");
