function FtoC(f){
    return (f-32)*5/9;
}

function odd(num){
    if(num<0){console.log("Invalid input!")}
    if(num===0){console.log("Enter valid number!")}
    for(i=0;i<=num;i++){
        if(i%2!=0){console.log(i)}
    }
}

function averageGrade(grades){
    if(grades.length===0){return("Enter a number!")}
    for(j=0;j<grades.length;j++){
        if(grades[j]<0){return "Enter valid number!"}
    }
    let sum=0;
    for(i=0;i<grades.length;i++){
        sum+=grades[i];
    }
    return sum/grades.length;
}

console.log(FtoC(0));
odd(9);
console.log(averageGrade([7,8,19,-9]));