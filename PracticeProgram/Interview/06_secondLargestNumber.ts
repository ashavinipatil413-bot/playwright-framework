function findSecondLargestnumber(numbers:number[]):number{

numbers.sort((a,b)=>b-a);

return numbers[0];//largest number
return numbers[1];//second largest number

}

const sort3=[100,80,40,50,20];
const sort4=findSecondLargestnumber(sort3);


console.log(sort4);
