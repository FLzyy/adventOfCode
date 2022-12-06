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

const tableified = data.split(/\n/);

let total = 0;

for (let i = 0; i < tableified.length; i++) {
  const str = tableified[i];
  const h1 = str.slice(0, str.length / 2);
  const h2 = str.slice(str.length / 2, str.length);
  const h1t = h1.split("");
  const h2t = h2.split("");
  const same = h1t.filter((value) => h2t.includes(value));
  const value = alphabet.indexOf(same[0]);

  total += value;
}

console.log(total);
