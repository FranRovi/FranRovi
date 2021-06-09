// Return average value of a given array.

function average(arr){
    let totalSum = 0;
    for (let i=0; i < arr.length;i++){
        totalSum += arr[i];
    }
    return totalSum / arr.length;
}
console.log("_".repeat(80));
console.log(`Executing: average(str)`);
console.log("Expected: 3");
console.log("Actual:", average([1,2,3,4,5]));

// Write a function that returns whether the given array has a balance point between 
// indeces, where one side's sum is equal to the other's. Example: [1,2,3,4,10] => true
// (between indices 3 & 4), but [1,2,4,2,1] => false. 

function balancePoint(arr){
    let leftSideSum = arr[0];
    let rightSideSum = arr[arr.length-1];
    let i = 0;
    let j = arr.length-1;
    while (i < arr.length-1){
        console.log("j: " + j + " i: " + i + " : " + "left sum " + leftSideSum);
        console.log("j: " + j + " i: " + i + " : " + "right sum " + rightSideSum);
        i++;
        if (leftSideSum <= rightSideSum) {
            leftSideSum += arr[i];
        } else {
            j--;
            i--;
            rightSideSum += arr[j];
        }

        if (j < i) {
            break;
        }
        // console.log("Left Side Sum: " + leftSideSum);
        // console.log("Right Side Sum: " + rightSideSum);
    }
    if (leftSideSum === rightSideSum){
        return true;
    } else {
        return false;
    }
}
console.log("_".repeat(80));
console.log(`Executing: balancePoint(str)`);
console.log("Expected: true");
console.log("Actual:", balancePoint([1,2,3,4,6,1,7,10]));

// Flatten a given array, eliminating nested and empty arrays. Do not alter the array;
// return a new one retaining the order. Given the array [1, [2,3], 4, []], return a 
// new [1,2,3,4]. 

function flatten(arr){
    let newArr = "newArray";
    return newArr;
}
// console.log("_".repeat(80));
// console.log(`Executing: flatten(str)`);
// console.log("Expected: [1,2,3,4]");
// console.log("Actual:", flatten([1, [2,3], 4, []]));