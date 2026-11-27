function findvowelsandconsonents(text:string){

const vowels :string[]=[];
const consonents:string[]=[];
const vowels1 =('aeiou');

const lower1 =text.toLowerCase();

for (let ch of lower1){
    if (ch>='a' && ch<='z'){

if (vowels1.includes(ch)){

vowels.push(ch);



}

else {

    consonents.push(ch);
}

}
}

return {vowels, consonents}

}



const str11="Ashavini";

const str12 =findvowelsandconsonents(str11);

console.log(str12)