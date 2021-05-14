// Given an array and an additional value, insert this value at the beginning of the
// array. Do this without using any built-in array methods

function pushFront(arr, num){
    let myArr = [num];
    for (let i = 0; i < arr.length; i++){
        myArr[i+1] = arr[i];
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: pushFront(arr, num)`);
console.log("Expected:[5,4,3,2,1]");
console.log("Actual:", pushFront([4,3,2,1], 5));

// Given an array remove, and return the value at the beginning of the
// array. Do this without using any built-in array method except pop();

function popFront(arr){
    let firstVal = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return firstVal;
}
console.log("_".repeat(80));
console.log(`Executing: popFront(arr)`);
console.log("Expected: 4");
console.log("Actual:", popFront([4,3,2,1]));


// Given an array, index, and addittional value, insert the value into the array at
// the given index. Do this without using built-in array methods.

function insertAt(arr, idx, value){
    let myArr = [];
    for (let i=0, j=0; i<arr.length; i++, j++){
        if (i === idx) {
            myArr[idx] = value;
            j++;
            myArr[j] = arr[i];
        } else {
            myArr[j] = arr[i];
        }
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: insertAt(arr, idx, value)`);
console.log("Expected: [8,7,6,5,4]");
console.log("Actual:", insertAt([8,7,5,4], 2, 6));

// Given an array, and an index into the array, remove and return the array value at
// that index. Do This without using any built-in array methods except pop().

function removeAt(arr, idx){
    let removedVal = arr[idx];
    for (let i=0, j=0; i<arr.length; i++, j++) {
        if (i === idx) {
            j--;
            arr[idx] = arr[i];
        } else {
            arr[j] = arr[i];
        }
    }
    arr.pop();
    console.log(arr);
    return removedVal;     
}
console.log("_".repeat(80));
console.log(`Executing: removeAt(arr, idx)`);
console.log("Expected: [5,4,2,1]");
console.log("Actual:", removeAt([5,4,3,2,1], 2));
