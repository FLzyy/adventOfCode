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
const even: any = {
  "A": "X",
  "B": "Y",
  "C": "Z",
};
const values: any = {
  "X": 1,
  "Y": 2,
  "Z": 3,
};

let score = 0;

for (let i = 0; i < tableified.length; i++) {
  let option = "";
  const tableifiedified = tableified[i].split(" ");

  if (tableifiedified[1] === "X") {
    option = lose[tableifiedified[0]];
    score += values[option] + 0;
  } else if (tableifiedified[1] === "Y") {
    option = even[tableifiedified[0]];
    score += values[option] + 3;
  } else if (tableifiedified[1] === "Z") {
    option = win[tableifiedified[0]];
    score += values[option] + 6;
  }
}

console.log(score);
