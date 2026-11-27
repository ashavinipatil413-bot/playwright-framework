//string a =abc-2019 want result as [abc] [2019]


const a :string ="abc-2019-Ashavini";

const output :string =a.split("-").map(part=>`[${part}]`).join(" ");

console.log(output);

const name1 ="Madhu";

const name2=name1.toLowerCase();

console.log(name2);

let fruits =new Map<String, String>([["Fruit",["Apple","Banana"]]]);

for (let  [key,values] of fruits){
    for (let val of values)

    console.log(`key: ${key}, value: ${val}`);



}




