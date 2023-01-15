let numbersMap = new Map();
let minValue = 10;
let maxValue = 10;
while (true) {
    let number = Math.floor(Math.random() * 10) % 6 + 1;
    if (numbersMap.get(number)) {
        let value = numbersMap.get(number)
        numbersMap.set(number, value + 1);
        if (value + 1 == 10) {
            maxValue = number;
            break;
        }
    } else {
        numbersMap.set(number, 1);
    }
}
let minNumber = 0;
for (const [key, value] of numbersMap.entries()) {
    if (minValue > value) {
        minValue = value;
        minNumber = key
    }
}
console.log(numbersMap, maxValue, minNumber)

let count = 50;
let birthMap= new Map();
while (count > 0) {
    count -= 1;
   let month = Math.floor(Math.random()*10)%12+1;
   if(birthMap.get(month)){
     birthMap.set(month,birthMap.get(month)+1)
   }else{
    birthMap.set(month,1);
   }
}
console.log(birthMap)