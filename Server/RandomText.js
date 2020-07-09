function randomText() {
  const table = [
    "hello",
    "Witaj",
    "Hi",
    "Bye",
    "Have a nice day",
    "Good morning",
  ];
  const tableLength = table.length;
  const randomIndex = Math.round(Math.random() * tableLength);
  const text = table[randomIndex];
  return text;
}

module.exports = randomText();
