const fs = require("fs");

// before entering event loop
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text.txt", "utf-8", (err, data) => {
  //   console.log(data);
  console.log("Data Accessed Successfully");
  console.log("----------------------------");

  //   entering event loop
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));
});

// top-level code
console.log("Top Level code executed as per priority ");
