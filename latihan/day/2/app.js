console.log("Hello, NodeJS!");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 2000);

console.log("End");


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});