const sente= "I Love Java";

let reversed:string = "";

for (let i=sente.length-1;i>=0;i--){

reversed=reversed+sente[i];

}

console.log(reversed)


//with Build in Function
function reverseWords(text:string):string{

  return text.split('').reverse().join('');

}

const str1="I LOve Testing";

const str2=reverseWords(str1);

console.log(str2)