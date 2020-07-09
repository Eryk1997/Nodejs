var http = require("http");
const randomText = require("./RandomText");
let createText = require("./createText");

http
  .createServer(function (request, response) {
    const table = createText(request.url);

    response.writeHead(table[1], { "Content-Type": "text/html" });
    response.write(table[0]);
    //response.write(randomText + "\n");
    response.end();
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
