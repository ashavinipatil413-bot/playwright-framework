function duplicatecharctors(text:string):object{

let count :{[key:string]:number}={}


  for (const ch of text){

if(ch ===" ")continue;
    count[ch] =(count[ch]||0)+1;

  }

  for (const ch in count){


    if(count[ch]>1){


      console.log(ch +"=>"+count[ch]);
    }
  }

    return count;
  }

  const str17="automatopn Tetsing";

  console.log(duplicatecharctors(str1));

    

