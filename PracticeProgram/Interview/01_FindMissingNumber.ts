function findMissingNumbers(num:number[]):number[]{
const missing:number[]=[];

const n=num.length+1;

for (let i=1;i<=n;i++){

    if (!num.includes(i)){

        missing.push(i);
    }
}

return missing;


}

const number1=[1,2,4,6,7,9];

const number2=findMissingNumbers(number1);

console.log(number2);