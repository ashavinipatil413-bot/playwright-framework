export {}; // Prevents variable name conflicts across files in the same folder

const sentense: string = "I Love Testing";
console.log(sentense);

const words: string[] = sentense.split(" ");
console.log(words);

const result: string[] = [];

for (let j = words.length - 1; j >= 0; j--) {
  result.push(words[j]);
}

let reverseresult: string = result.join(" ");
console.log(reverseresult); // Output: "Testing Love I"