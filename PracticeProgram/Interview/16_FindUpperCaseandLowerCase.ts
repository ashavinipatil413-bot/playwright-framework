function splitcase(text:string):{upper:string;lower:string}{

let upper="";

let lower="";

for (let ch of text)
{

if(ch>='A' && ch<="Z"){

upper +=ch;

}else if(ch>='a' && ch<="z"){
lower +=ch;
}
}

return {upper:upper, lower:lower};
}

const str =splitcase("hElLo BoYs")

console.log(str.upper)
console.log(str.lower)


