const sentense="  Playwright with Typescript   ";

const sentense1=sentense.trim();

console.log(sentense1);

const words:string[] =sentense1.split(" ")

console.log(words);

console.log(words.length);

//count characters in string:

console.log(sentense.length)

const excludespace : string =sentense.replaceAll(" ","");

console.log(excludespace.length)
