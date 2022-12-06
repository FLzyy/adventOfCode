const data = await Deno.readTextFile("../data.txt");

const alphabet = [
  "123yh auscbu9 b",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const tableified = data.match(/(?:^.*$\n?){1,3}/mg);

let total = 0;

if (tableified) {
  for (let i = 0; i < tableified.length; i++) {
    const strings = tableified[i].split(/\n/).filter((element) =>
      element !== ""
    );

    const commonCharacters = strings[0].split("").filter((char) => {
      return char !== "" &&
        strings.every((string) => string.indexOf(char) > -1);
    }).slice(0, 1);
    const value = alphabet.indexOf(commonCharacters[0]);

    total += value;
  }
}

console.log(total);
