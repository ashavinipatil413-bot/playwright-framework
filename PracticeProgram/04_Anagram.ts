const str1:string="Listen"
const str2:string="Silent"


const sort1:string=str1.toLowerCase();
const sort2:string=str2.toLowerCase();

console.log(sort1);
console.log(sort2);

const sorted1:string=sort1.split("").sort().join();

const sorted2:string=sort2.split("").sort().join();

console.log(sorted1);
console.log(sorted2);

if (sorted1==sorted2){

    console.log("strings are anaram")


}else (console.log ("strings are not anagram"))

//using function-Two strings are called anagrams when they contain the same characters with the same frequency, but the order of characters can be different.

function anagramString(str1:string,str2:string):boolean{

let s1=str1.toLowerCase().split('').sort().join('');
let s2=str2.toLowerCase().split('').sort().join('');

return s1===s2




}

const p1=anagramString("Listen","Silent");

console.log(p1);



