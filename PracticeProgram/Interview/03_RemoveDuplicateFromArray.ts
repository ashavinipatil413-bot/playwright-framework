function removeDuplicates(nums:number[]):number[]{

return [...new Set(nums)];

}

const str3 =[10,20,40,10,40];

const str4=removeDuplicates(str3);

console.log(str4);



