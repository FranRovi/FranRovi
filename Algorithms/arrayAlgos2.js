// Given a numerical array, reverse the order of the values. The reversed
// array should have the same length, with existing elements moved to 
// indices so that the order of elements is reversed

function reverseArray(arr){
    let myArr = arr;
    for (let i = 0, j=1; i < Math.floor(myArr.length / 2); i++, j++){
        let temp = arr[i];
        arr[i] = arr[arr.length-j];
        arr[arr.length-j] = temp;
        // console.log(arr);
        // console.log("temp: " + temp);
        // console.log("i: " + [i], "j: " + [arr.length-j]);
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: reverseArray(arr)`);
console.log("Expected:[1,2,3,4,5]");
console.log("Actual:", reverseArray([5,4,3,2,1]));

// Implement a function that accepts an array and removes any values that 
// are less that zero

function removeNegatives(arr){
    let myArr = arr;
    let positiveArr = [];
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] >= 0) {
            positiveArr.push(myArr[i]); 
        }
    }
    // console.log(positiveArr);
    myArr = positiveArr;
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: removeNegatives(arr)`);
console.log("Expected:[5,3,1]");
console.log("Actual:", removeNegatives([5,-4,3,-2,1]));

// You are given an array with heights of consecutive buildings in the city. For example,
// [-1,7,3] would represent three buildings: first is actually below street leve, second is
// seven stories high, and third is three sotries high (but hidden behind the seven-story
// building) You are situated at street level. Return an array containing heights of the
// buildings you can see. Given [1,-1,7,3] return [1,7].


function skylineHeigths(arr){
    let myArr = [];
    let buildingHeight = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > buildingHeight){
            myArr.push(arr[i]);
            buildingHeight = arr[i];
        }
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: skylineHeigths(arr)`);
console.log("Expected:[1,7]");
console.log("Actual:", skylineHeigths([1,-1,7,3]));

// Given a sorted array and a value, return whether that value is present in the array.
// Do not sequentially iterate the entire array. Instead, "divide and conquer", taking 
// advantage of the fact that the array is sorted.

function binarySearch(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    // console.log("leftIdx: " + leftIdx);
    // console.log("rightIdx: " + rightIdx);

    while(leftIdx <= rightIdx) {
        let midpointIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2); 
        // console.log("midpointIdx: " + midpointIdx);
        let midpointVal = arr[midpointIdx];
        // console.log("midpointVal: " + midpointVal);
        
        if (midpointVal === val) {
            return `Element found at position ${midpointIdx}`
        } else if (val < midpointVal) {
            rightIdx = midpointIdx - 1;
        } else {
            leftIdx = midpointIdx + 1;
        }
        // console.log("leftIdx: " + leftIdx);
        // console.log("rightIdx: " + rightIdx);
        // console.log("midpointVal: " + midpointVal);
    }
    return `-1. Elemenet ${val} is NOT present in the array provided`;
}
console.log("_".repeat(80));
console.log(`Executing: binarySearch(arr)`);
console.log("Expected: value 7 is at index 6 of the array provided");
console.log("Actual:", binarySearch([1,2,3,4,5,6,7,8,9,10], 7));

console.log("_".repeat(80));
console.log(`Executing: binarySearch(arr)`);
console.log("Expected: Element 7 is NOT present in the array provided");
console.log("Actual:", binarySearch([1,2,3,4,5,6,8,9,10,11], 7));

// You will be given a numerical array tht has first been sorted, then rotated by an
// unknown amount. Find and return the minimum value in the array.

// function minOfSortedRotated(arr, num){
    
// }
// console.log("_".repeat(80));
// console.log(`Executing: minOfSortedRotated(arr, num)`);
// console.log("Expected:[]");
// console.log("Actual:", minOfSortedRotated([1,2,3,4,5,6]));
