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

// Write a recursive function that, given a sorted array and a value, 
// determines whether the value is found within the array. For example, 
// rBinarySearch([1,3,5,6],4) = false;  rBinarySearch([1,3,5,6],4) = true.

function rBinarySearch(arr, target){
    let leftIdx = 0;
    let rigthIdx = arr.length-1 


    while (leftIdx <= rightIdx) {
        let midpointIdx = leftIdx + Math.floor((rigthIdx - leftIdx) / 2 );
        let midpointVal = arr[midpointIdx];
        if (midpointVal === target) {
            return true;
        } else {

        }
    }
    
    while (num > 0) {
        totalSum += num;
        // console.log(totalSum)
        num--
        // console.log(num);
        rBinarySearch(num);
    }
    return totalSum;
}
console.log("_".repeat(80));
console.log(`Executing: rBinarySearch(str)`);
console.log("Expected: false");
// console.log("Actual:", rBinarySearch([1,3,5,6],4));

console.log("_".repeat(80));
console.log(`Executing: rBinarySearch(str)`);
console.log("Expected: true");
// console.log("Actual:", rBinarySearch([1,3,5,6],5));


// Write rFib(num). Recursively compute and return the numth Fibonacci
// value, As earlier, treat the first two (num = 0, num = 1) Fibonacci
// values as 0 and 1. Thus, rFib(2) = 1 (0 + 1); rFib(3) = 2 (1 + 1);
// rFib(4) = 3 (1 + 2); rFib(5) = 5 (2 + 3). Also rFib(3.65) = rFib(3) = 2. 
// Finally, rFib(-2) = rFib(0) = 0. 

function rFib(num){
    num = Math.floor(num);

    if (num < 0){
        num = 0;
    } 

    if (num < 2) {
        return num;
    } else {
        return rFib(num - 1) + rFib(num - 2);  
    }
}

console.log("_".repeat(80));
console.log(`Executing: rFib(2)`);
console.log("Expected: 1");
console.log("Actual:", rFib(2));

console.log("_".repeat(80));
console.log(`Executing: rFib(3)`);
console.log("Expected: 2");
console.log("Actual:", rFib(3));

console.log("_".repeat(80));
console.log(`Executing: rFib(4)`);
console.log("Expected: 3");
console.log("Actual:", rFib(4));

console.log("_".repeat(80));
console.log(`Executing: rFib(5)`);
console.log("Expected: 5");
console.log("Actual:", rFib(5));

console.log("_".repeat(80));
console.log(`Executing: rFib(3.65)`);
console.log("Expected: 2");
console.log("Actual:", rFib(3.65));

console.log("_".repeat(80));
console.log(`Executing: rFib(-2)`);
console.log("Expected: 0");
console.log("Actual:", rFib(-2));
