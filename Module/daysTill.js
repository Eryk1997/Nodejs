var daysTill = function () {};

daysTill.prototype = {
  showDaysTill: function (index) {
    switch (index) {
      case 0:
        console.log("Boże Narodzenie");
        console.log(getDay(25, 12));
        break;
      case 1:
        console.log("Dzień Matki");
        console.log(getDay(26, 5));
      default:
        break;
    }
  },
};

function getDay(day, month) {
  var currentDate = new Date();
  var yyyy = currentDate.getFullYear();
  if (month < currentDate.getMonth())
    var pom = new Date(yyyy + 1, month - 1, day);
  else var pom = new Date(yyyy, month - 1, day);

  var days = Math.round((pom - currentDate) / 86400000);

  return days;
}

module.exports = daysTill;
