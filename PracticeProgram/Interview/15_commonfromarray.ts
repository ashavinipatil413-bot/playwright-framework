function commonfromarray(arr1:number[],arr2:number[]):number[]{

const set1=new Set(arr1);

  const common =new Set<number>();

  for (let ch of arr2){

    if (set1.has(ch)){

      common.add(ch);
    }
  }
  

  return [...common];




  
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6, 7];

const set4 = commonfromarray(arr1, arr2);

console.log(set4);