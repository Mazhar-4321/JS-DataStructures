let array = []
array.push(Math.floor(Math.random()*10))
array.push(Math.floor(Math.random()*10))
array.push(Math.floor(Math.random()*10))
let initialValue=array[0]
console.log(array.reduce((v1,v2)=>v1<=v2?v1:v2))
array.push(Math.floor(Math.random()*10))
console.log((array.sort())[1])
console.log((array.sort().reverse())[1])
let array1=[]
for(let i=11;i<=100;i+=11){
    array1.push(i)
}
console.log(array1)