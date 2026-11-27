function Fibonacciseries(num5:number):number[]{

let a=0;
let b=1;

let result:number[]=[];

for (let i=0;i<num5;i++){

    result.push(a);

    let c= a+b;

    a=b;
    b=c;

}

return result;
}

const output =Fibonacciseries(10);

console.log(output);



















