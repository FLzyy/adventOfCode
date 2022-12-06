// deno-lint-ignore-file no-explicit-any
const data = await Deno.readTextFile("../data.txt");

const tableified = data.split(/\n/);

const win: any = {
  "C": "X",
  "A": "Y",
  "B": "Z",
};
const lose: any = {
  "B": "X",
  "C": "Y",
  "A": "Z",
};
const values: any = {
  "X": 1,
  "Y": 2,
  "Z": 3,
};

let score = 0;

for (let i = 0; i < tableified.length; i++) {
  const tableifiedified = tableified[i].split(" ");

  if (lose[tableifiedified[0]] === tableifiedified[1]) {
    score += values[tableifiedified[1]] + 0;
  } else if (win[tableifiedified[0]] === tableifiedified[1]) {
    score += values[tableifiedified[1]] + 6;
  } else {
    score += values[tableifiedified[1]] + 3;
  }
}

console.log(score);
