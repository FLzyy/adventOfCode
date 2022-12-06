import { Stack } from "../classes.ts";

const data = await Deno.readTextFile("../data.txt");
const stacks: Stack[] = [
  new Stack(), // Really bad solution to shift array by 1, but its probably fine.
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
  new Stack(),
];
//stacks[1]?.push("Z", "N");
//stacks[2]?.push("M", "C", "D");
//stacks[3]?.push("P");
stacks[1]?.push("B", "Z", "T");
stacks[2]?.push("V", "H", "T", "D", "N");
stacks[3]?.push("B", "F", "M", "D");
stacks[4]?.push("T", "J", "G", "W", "V", "Q", "L");
stacks[5]?.push("W", "D", "G", "P", "V", "F", "Q", "M");
stacks[6]?.push("V", "Z", "Q", "G", "H", "F", "S");
stacks[7]?.push("Z", "S", "N", "R", "L", "T", "C", "W");
stacks[8]?.push("Z", "H", "W", "D", "J", "N", "R", "M");
stacks[9]?.push("M", "Q", "L", "F", "D", "S");

const table = data.split(/\n/);

for (let i = 0; i < table.length; i++) {
  // 0: move amount, 1: from, 2: to
  const values = table[i].split(/\s/gi).filter((element) =>
    element.match(/[0-9]+/)
  );

  for (let b = 0; b < parseInt(values[0]); b++) {
    stacks[parseInt(values[1])]?.move(stacks[parseInt(values[2])]);
  }
}
let str = "";

for (let i = 1; i < stacks.length; i++) {
  str += stacks[i].peek();
}

console.log(str);
