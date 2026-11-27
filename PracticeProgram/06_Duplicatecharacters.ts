const str6 ="Hello";

const charMap =new Map<String, Number>();

for (const letter of str6){

const currentCount=charMap.get(letter)||0;

chatMap.set(letter, currentCount + 1);


}
g