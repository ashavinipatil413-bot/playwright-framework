function minNumber(nummin9:number[]):number{

const min =Math.min(...nummin9);

return min;




}

const minNumber1=[10,20,40,89,5,1];

const minNumber2 =minNumber(minNumber1);

console.log(minNumber2);