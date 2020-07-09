const { type } = require("os");

module.exports = function createText(url) {
  let newText = [];

  if (url == "/about") {
    newText.push("<h1> About </h1>");
    newText.push(200);
  } else if (url == "/test") {
    newText.push("<h1> Test </h1>");
    newText.push(200);
  } else {
    newText.push("");
    newText.push(404);
  }

  return newText;
};
