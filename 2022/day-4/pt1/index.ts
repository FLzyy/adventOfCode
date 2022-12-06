const raw = await Deno.readTextFile("../data.txt");

const range = (start: number, end: number) => {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
};

const convertRange = (rangeText: string) => {
  const [start, end] = rangeText.split("-").map(Number);
  return range(start, end);
};

// stolen from https://github.com/ilsubyeega/aoc2022/blob/main/day4%2Cjs (thanks) ( I couldn't get my solution to work ;( )
const checkFilled = (first: number[], second: number[]) => {
  first.filter((element) => second.includes(element)).length === first.length ||
    second.filter((element) => first.includes(element)).length === first.length;
};

console.log(
  raw
    .split("\n")
    .map((a) => a.split(","))
    .map((a) => a.map(convertRange))
    .filter((a) => checkFilled(a[0], a[1])).length,
);
