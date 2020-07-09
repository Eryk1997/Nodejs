var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    var path = __dirname + "/views" + request.url + ".html";
    console.log(path);
    debugger;
    fs.readFile(path, "utf-8", function (error, data) {
      if (error) {
        response.writeHead(404);
        console.log(error);
      } else {
        response.writeHead(200);
        response.end(data);
      }
    });
  })
  .listen(3000);

module.exports.run = http