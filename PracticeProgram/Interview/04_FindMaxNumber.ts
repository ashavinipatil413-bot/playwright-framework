function findMaxNumber(nummax:number[]):number{

const max= Math.max(...nummax);


return max;



}

const maxnumber=[10,20,30,90,100];

const maxnumber2=findMaxNumber(maxnumber);

console.log(maxnumber2);