let numbersMap = new Map();
let minValue=10;
let maxValue=10;
while(true){
    let number = Math.floor(Math.random()*10)%6+1;
    if(numbersMap.get(number)){
        let value=numbersMap.get(number)
        numbersMap.set(number,value+1);
        if(value+1==10){
            maxValue=number;
            break;
        }
    }else{
        numbersMap.set(number,1);
    }
}
let minNumber=0;
for(const[key,value] of numbersMap.entries()){
        if(minValue>value){
            minValue=value;
            minNumber=key
        }
}
console.log(numbersMap, maxValue,minNumber)