function findprimeNumber(numb:number):boolean{

    

for (let i=2;i<numb;i++){

if(numb %i===0) {

    return false;
    break;
} 


}
return true;
}

const primenum=20;

const primenumb2=findprimeNumber(primenum);

console.log(primenumb2);