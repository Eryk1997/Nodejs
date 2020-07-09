function timeTillChristmas() {
  const christmas = new Date(2020, 12, 25);
  const currentDate = new Date();
  const christmasDays = Math.round((christmas - currentDate) / 100000000 - 3);
  return christmasDays;
}

module.exports = timeTillChristmas();
