function minuteToSecondConverter(minute){
    return minute*60;
}

function yearToDayConverter(year){
    return year*365;
}

function checkDivider(a,b){
    if(a%b===0){
        return true;
    }
    else{
        return false;
    }
}

function feetToMetersConverter(feet){
    return feet*0.3048;
}

let add = (a, b) => a + b;

let multiply = (a,b)=> a*b;

function factorial(num){
    let sum=1;
    if(num!=1){
        for(i=1; i<=num; i++){
          sum=sum*i;
        }
        return sum;
    }
    else{
        return 1;
    }
}

function star(num){
    let rowcount=0;
    for(i=1;i<=num;i++){
        let stars="";
        for(j=0;j<=rowcount;j++){
            stars+="*"
        }
        console.log(stars);
        rowcount++
    }
}

console.log(minuteToSecondConverter(5));
console.log(yearToDayConverter(6));
console.log(checkDivider(25,5));
console.log(feetToMetersConverter(6));
console.log(factorial(5));
star(12);