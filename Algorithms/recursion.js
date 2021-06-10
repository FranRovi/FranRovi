// Write a recursive function that, given a number, returns the sum of integers
// from one up to that number. For example rSigma(5) = 1+2+3+4+5 = 15;
// rSigma(2.5) = 1+2 = 3; rSigma(-1) = 0;

function rSigma(userNum){
    let num = Math.floor(userNum); 
    let totalSum = 0;
    if (num < 0) {
        return 0;
    }
    while (num > 0) {
        totalSum += num;
        // console.log(totalSum)
        num--
        // console.log(num);
        rSigma(num);
    }
    return totalSum;
}
console.log("_".repeat(80));
console.log(`Executing: rSigma(str)`);
console.log("Expected: 15");
console.log("Actual:", rSigma(5));

console.log("_".repeat(80));
console.log(`Executing: rSigma(str)`);
console.log("Expected: 3");
console.log("Actual:", rSigma(2.5));

console.log("_".repeat(80));
console.log(`Executing: rSigma(str)`);
console.log("Expected: 0");
console.log("Actual:", rSigma(-1));