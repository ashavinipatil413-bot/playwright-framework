

//Find Multiple misisng number 

function findDuplicateNumber1(num2:number[]):number[]{

const missing :number[] =[];

const max=Math.max(...num2);

for (let i=num2[0]+10;i<=max;i=i+10){

if(!num2.includes(i)){

    missing.push(i);






}



}


return missing;


}

const numbers11=[10,20,40,60];
const number22=findDuplicateNumber1(numbers11);

console.log(number22);


    



