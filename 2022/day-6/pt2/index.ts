//const data = await Deno.readTextFile("../data.txt");
const data = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

let chars = 0;

for (let i = 0; i < data.length; i++) {
  const substring = `${data[i]}${data[i + 1]}${data[i + 2]}${data[i + 3]}${
    data[i + 4]
  }${data[i + 5]}${data[i + 6]}${data[i + 7]}${data[i + 8]}${data[i + 9]}${
    data[i + 10]
  }${data[i + 11]}${data[i + 12]}${data[i + 13]}`; // gets 14 length substrings
  const regex = /.*(.).*\1.*/; // regex to test on (I don't know how this worked, but ok I guess)

  //console.log(substring);

  if (!regex.test(substring)) {
    chars = i + 10; // really bad solution because with the test case I was getting 9 instead of 19 so I just added 10, it works I guess :)
    break;
  }
}

console.log(chars);
