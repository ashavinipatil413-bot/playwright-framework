function reverseString(text:string):string{

return text.split('').reverse().join('');
  
}

const str1="Ashavini";

const str2=reverseString(str1);

console.log(str2)