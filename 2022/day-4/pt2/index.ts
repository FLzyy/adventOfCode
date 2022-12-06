const raw = await Deno.readTextFile("../data.txt");

const range = (start: number, end: number) => {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
};

const convertRange = (rangeText: string) => {
  const [start, end] = rangeText.split("-").map(Number);
  return range(start, end);
};

// stolen from https://github.com/ilsubyeega/aoc2022/blob/main/day4%2Cjs (thanks) ( I couldn't get my solution to work ;( )
const checkDuplicates = (first: number[], second: number[]) =>
  first.filter((element) => second.includes(element)).length > 0 ||
  second.filter((element) => first.includes(element)).length > 0;

console.log(
  raw
    .trim()
    .split("\n")
    .map((a) => a.split(","))
    .map((a) => a.map(convertRange))
    .filter((a) => checkDuplicates(a[0], a[1])).length,
);
