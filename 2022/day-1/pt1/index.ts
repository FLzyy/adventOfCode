const data = await Deno.readTextFile("../data.txt");
const tableified = data.split(/\n\s*\n/);
const added: number[] = [];

for (let i = 0; i < tableified.length; i++) {
  const splitted = tableified[i].split(/\n/);
  const converted = splitted.map(Number);
  const sum = converted.reduce((a, b) => a + b, 0);

  added.push(sum);
}

console.log(Math.max(...added));
