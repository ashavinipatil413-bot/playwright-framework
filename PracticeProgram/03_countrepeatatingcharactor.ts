function countCharacters(text:string){

let char: {[key:string]:number} ={};

  for (let i=0;i<text.length;i++){

let ch=text[i];

    if(char[ch]){
char[ch]++
      
    }else{
      char[ch]=1;
    }
  }

return char;

  
}

const string1="Programing";
const string2=countCharacters(str1);
console.log(str2);