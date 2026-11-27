function countCharacters(text: string): object {

let count :{[key :string]:number}={};

for (let ch of text){


    if(count[ch]){

        count[ch]++;


    }else {

        count[ch]=1;
    }
}
return count;


}


const result =console.log(countCharacters("success"));