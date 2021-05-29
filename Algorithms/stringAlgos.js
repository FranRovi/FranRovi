// Given two arrays, create an associative array (map) contanining keys of the first, and values
// of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return { "abc": 42,
// 3: "wassup", "yo": true}


function arrs2Map(arr1, arr2){
    let dict = {};
    for (let i=0; i<arr1.length; i++){
        dict[arr1[i]] = arr2[i];
    }
    return dict;
}
console.log("_".repeat(80));
console.log(`Executing: arrs2Map(arr1, arr2)`);
console.log("Expected:{ 'abc': 42, 3: 'wassup', 'yo': true}");
console.log("Actual:", arrs2Map(["abc", 3, "yo"], [42, "wassup", true]));

// Given two arrays, create an associative array (map) contanining keys of the first, and values
// of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return { "abc": 42,
// 3: "wassup", "yo": true}


function invertHash(hash){
    let invertHash = {};
    for (let i=0; i<hash.length; i++){
        invertHash[hash[i]] = 0;
    }
    return invertHash;
}
console.log("_".repeat(80));
console.log(`Executing: invertHash(hash)`);
console.log("Expected:{ 'Zaphod': 'name', 2: 'numHeads'}");
console.log("Actual:", invertHash({"name": "Zaphod", "numHeads": 2}));

//

function reverseString(str){
    let word = str.split('');
    let reverseWord ='';
    console.log(reverseWord);
    for (let i=word.length; 0<=i; i--){
    // for (let i=0; i<word.length; i++){
        reverseWord += word[i];
        console.log(reverseWord);
    }
    return reverseWord;
}
console.log("_".repeat(80));
console.log(`Executing: reverseStr(str)`);
console.log("Expected: erutaerc");
console.log("Actual:", reverseString("creature"));