let array = []
array.push(Math.floor(Math.random()*10))
array.push(Math.floor(Math.random()*10))
array.push(Math.floor(Math.random()*10))
let initialValue=array[0]
console.log(array.reduce((v1,v2)=>v1<=v2?v1:v2))