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
    for (let element in hash){
        invertHash[hash[element]] = element;
    }
    // console.log(hash);
    return invertHash;
}
console.log("_".repeat(80));
console.log(`Executing: invertHash(hash)`);
console.log("Expected:{ 'Zaphod': 'name', 2: 'numHeads'}");
console.log("Actual:", invertHash({"name": "Zaphod", "numHeads": 2}));

console.log("_".repeat(80));
console.log(`Executing: invertHash(hash)`);
console.log("Expected:{ 'a': 1, 'b': 2");
console.log("Actual:", invertHash({1: "a", 2: "b"}));

//

function reverseString(str){
    let word = str.split('');
    let reverseWord = '';
    // console.log(reverseWord);
    for (let i=word.length-1; i >= 0; i--){
    // for (let i=0; i < word.length; i++){
        reverseWord += word[i];
        // console.log(reverseWord);
    }
    return reverseWord;
}
console.log("_".repeat(80));
console.log(`Executing: reverseStr(str)`);
console.log("Expected: erutaerc");
console.log("Actual:", reverseString("creature"));

// console.log(1 + 2 + "3" + "4" + 5 + 6);

// function removeBlanks(str){
//     let strLst = str.split("");
//     let noBlanksStr = "";
//     let regex = /^[A-Za-z]/;
//     // let strLst = str.split(" ")
//     for (let i = 0; i < strLst.length; i++){
//         if (strLst[i] === strLst.test(regex)) {
//             console.log("inside the regex loop")
//             noBlanksStr += strLst[i];
//             console.log(noBlanksStr)
//         } else {
//             continue;
//         }
//     }
//     console.log(noBlanksStr);
//     // return str;
// }
// console.log("_".repeat(80));
// console.log(`Executing: removeBlanksBuiltIn(str)`);
// console.log("Expected: '   play  that   Funky    Music  '");
// console.log("Actual:", removeBlanks("   play  that   Funky    Music  "));


// Create a function that, given a string, returns the string's acronym (first letters only
// capitalized). Given 'there's no free lunch - gotta pay yer way', return "TNFL-GYPW". Given
// "Live from New York, it's Saturday Night!", returns "LFNYISN". 

function acronyms(str){
    let acronym = "";
    let strLst = str.split(" ");
    // console.log(strLst);
    for (let i=0; i < strLst.length; i++){
        acronym += strLst[i][0];
    }
    acronym = acronym.toUpperCase();
    return acronym;
}
console.log("_".repeat(80));
console.log(`Executing: acronyms(str)`);
console.log("Expected: 'TNFL-GYPW'");
console.log("Actual:", acronyms("there's no free lunch - gotta pay yer way"));

console.log("_".repeat(80));
console.log(`Executing: acronyms(str)`);
console.log("Expected: 'LFNYISN'");
console.log("Actual:", acronyms("Live from New York, it's Saturday Night!"));


// Create a function that, given an input string, returns a boolean whether parenthes in
// that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)", return
// false. Given "n)0(t(0)k", return

function parensValid(str){
    let frequency = {
        '(': 0,
        ')': 0,
    };
    let strLst = str.split("");
    for (let i=0; i < strLst.length; i++) {
        if (strLst[i] === '(' || strLst[i] === ')') {
            if(strLst[i] in frequency){
                frequency[strLst[i]]++;
            } 
            // console.log(frequency);
            if (frequency[')'] > frequency['(']) {
                return false;
            }
        }
    }
    if (frequency['('] === frequency[')']) {
        return true;
    } else {
        return false;
    }
}
console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: true");
console.log("Actual:", parensValid("y(3(p)p(3)r)s"));

console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: false");
console.log("Actual:", parensValid("n(0(p)3"));

console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: false");
console.log("Actual:", parensValid("n)0(t(0)k"));

