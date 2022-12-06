const data = await Deno.readTextFile("../data.txt");
//const data = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

let chars = 0;

for (let i = 0; i < data.length; i++) {
  const substring = `${data[i]}${data[i + 1]}${data[i + 2]}${data[i + 3]}`;
  const regex = /.*(.).*\1.*/;

  console.log(substring);

  if (!regex.test(substring)) {
    chars = i + 4;
    break;
  }
}

console.log(chars);
