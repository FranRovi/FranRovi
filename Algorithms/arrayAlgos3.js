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
console.log("Expected: 6");
console.log("Actual:", nthToLast([1,6,3,4,2,5], 5));

// Return the second-largest element of an array.

function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log("_".repeat(80));
console.log(`Executing: secondLargest(arr)`);
console.log("Expected:7");
console.log("Actual:", secondLargest([3,7,5,6,4,9]));

// Given an array, return the nth-largest-element: there should be(n-1) elements that are larger.

function nthLargest(arr, val){
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length - val];
}
console.log("_".repeat(80));
console.log(`Executing: nthLargest(arr)`);
console.log("Expected:15");
console.log("Actual:", nthLargest([11,15,13,14,12,16]));

// Replicate JavaScript's concat(). Create a standalone function that accepts to arrays. Return a new array containing the first array's elements,
// followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat(["a", "b"], [1,2]) should return ["a","b",1,2]. 

function arrConcat(arr1,arr2){
    // E.S. new feature to split values of arr1 and stored them in newArr. However, newArr and arr1 doesn't point to the same place in memory, newArr is a new (deep) copy of arr1.
    let newArr=[... arr1];
    // for (let i=0;i<arr1.length;i++){
    //     newArr.push(arr1[i]);
    // }
    for (let i=0;i<arr2.length;i++){
        newArr.push(arr2[i]);    
    }
    return newArr;
}
console.log("_".repeat(80));
console.log(`Executing: arrConcat(arr1, arr2)`);
console.log("Expected:['a','b',1,2]");
console.log("Actual:", arrConcat(["a","b"],[1,2]));

// Replicate JavaScript's concat(). Create a standalone function that accepts to arrays. Return a new array containing the first array's elements,
// followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat(["a", "b"], [1,2]) should return ["a","b",1,2]. 

function fasterFactorial(val){
    let sum = 1;
    if (val == 0){
        return 1;
    } else {
        let i=1;
        while(i <= val){
            sum *=i;
            console.log(`i: ${i} sum: ${sum}`)
            i++
        }
    }
    return sum;

}
console.log("_".repeat(80));
console.log(`Executing: fasterfactorial(val)`);
console.log("Expected:8");
console.log("Actual:", fasterFactorial(4));
