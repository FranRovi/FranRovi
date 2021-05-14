// Implement a function that accepts two non-negative integers as arguments. Function
// should return the last digit of the first number(a) raised to an exponent of the 
// second number(b).
function lastDigitofAToTheB(num1, num2){
    let answer = 1;
    while (num2 > 0) {
        answer *= num1;
        console.log(answer)
        if (answer > 9){
            answer = answer.toString().split("");
            answer = answer[answer.length-1];
        }
        num2--
    }
    return answer;
}
console.log("_".repeat(80));
console.log(`Executing: lastDigitofAToTheB(num1, num2)`);
console.log("Expected:", 1);
console.log("Actual:", lastDigitofAToTheB(3, 4));

console.log("_".repeat(80));
console.log(`Executing: lastDigitofAToTheB(num1, num2)`);
console.log("Expected:", 2);
console.log("Actual:", lastDigitofAToTheB(12, 5));

// Create a function that, given the number of seconds since 12:00:00, will print the
// angles (in degrees) of the hour, minute and second hands. As a quick review, there
// are 360 degrees in a full arc rotation. Treat "straight-up" 12:00:00 as 0 degrees
// for all hands. 
function clockHandAngles(seconds){
    dictDegrees = {};
    let hourDegrees = Math.floor(seconds/ 3600);
    dictDegrees["hourDegrees"] = (hourDegrees / 12) * 360;
    let minutesDegrees = Math.floor((seconds - (hourDegrees * 3600)) / 60);
    dictDegrees["minutesDegrees"] = (minutesDegrees / 60) * 360; 
    let secondsDegrees = Math.floor((seconds - (hourDegrees * 3600 + minutesDegrees * 60)));
    dictDegrees["secondsDegrees"] = (secondsDegrees / 60) * 360;

    return dictDegrees;
}

console.log("_".repeat(80));
console.log(`Executing: clockHandAngles(150)`);
console.log("Expected: ", );
console.log("Actual:", clockHandAngles(150));

console.log("_".repeat(80));
console.log(`Executing: clockHandAngles(25600)`);
console.log("Expected: ", );
console.log("Actual:", clockHandAngles(25600));