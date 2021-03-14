
//general loops:for,while,do-while
let a =34;
a +=1;
a++;
console.log(a);

for(let i=0; i<10;i++)
{
    console.log(i);
}

let j = 0;
while(j<10){
    console.log(j+1);
    j +=1;
}

let k = 0;
do{
    
    if(k ===5){
        k +=1;
        continue;
//jab bhi ek ietom ko chhorna chahte h to continue use krna h
//jb v loop k bahar jana chahte h to break use karna h
    }
    console.log(k + 1);
    k +=1;
} while (k < 10);
console.log('done');

let arr = [2,3,4,5,6,7];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});
console.log('done');

let obj = {
    name: "umesh kumar",
    age: 78,
    type: "web programmer",
    os: "ubuntu"
}
for (let key in obj)
{
    console.log(`the ${key} of object is ${obj[key]}`)
}
console.log('done');
