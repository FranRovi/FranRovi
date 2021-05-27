// Return the second-to-last element of an array.

function secondToLast(arr){
    return arr[arr.length-2];
}
console.log("_".repeat(80));
console.log(`Executing: secondToLast(arr)`);
console.log("Expected: 4");
console.log("Actual:", secondToLast([1,5,3,4,2]));

// Return the element that is N-from-array's-end.

function nthToLast(arr, val){
    if (arr.length < val) {
        print("Value is greater than array length");
    } else {
        return arr[arr.length-val];
    }
}
console.log("_".repeat(80));
console.log(`Executing: nhtToLast(arr)`);
console.log("Expected: 5");
console.log("Actual:", nthToLast([1,5,3,4,2], 4));

// Return the second-largest element of an array.

function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
            // console.log(largest);
            // console.log(secondLargest);
        } else if (arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
            // console.log(secondLargest);
        }
    }
    return secondLargest;
}
console.log("_".repeat(80));
console.log(`Executing: secondLargest(arr)`);
console.log("Expected:5");
console.log("Actual:", secondLargest([1,5,3,4,2,7]));

// Given an array, return the nth-largest-element: there should be(n-1) elements that are larger.

function nthLargest(arr){

}
console.log("_".repeat(80));
console.log(`Executing: nthLargest(arr)`);
console.log("Expected:");
console.log("Actual:", nthLargest([1,-1,7,3]));