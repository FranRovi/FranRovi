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
        reverseWord += word[i];
    }
    return reverseWord;
}
console.log("_".repeat(80));
console.log(`Executing: reverseStr(str)`);
console.log("Expected: erutaerc");
console.log("Actual:", reverseString("creature"));

// Create a function that, given a string, returns the string without blanks. Given
// "   play  that   Funky    Music  ", returns a string containing "playthatFunkyMusic". 

function removeBlanks(str){
    let noBlanksStr = "";
    let strLst = str.split("");
    for (let i = 0; i < strLst.length; i++){
        if (strLst[i] !== " ") {
            noBlanksStr += strLst[i];
        } else {
            continue;
        }
    }
    return noBlanksStr;
}

console.log("_".repeat(80));
console.log(`Executing: removeBlanks(str)`);
console.log("Expected: '   play  that   Funky    Music  '");
console.log("Actual:", removeBlanks("   play  that   Funky    Music  "));

// Solution using regex

function removeBlanksRegex(str){
    let regex = /\S/g;
    let noBlanksStrList = str.match(regex);
    let noBlanksStr = noBlanksStrList.join("");
    return noBlanksStr;
}

console.log("_".repeat(80));
console.log(`Executing: removeBlanksRegex(str)`);
console.log("Expected: '   play  that   Funky    Music  '");
console.log("Actual:", removeBlanksRegex("   play  that   Funky    Music  "));

// Create a function that, given a string, returns the integer made from the string's
// digit. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return then number 1,357,924,680.

function getStringDigit(str){
    let strDigit = "";
    let strDigitLst = str.split("");
    for (let i=0; i < strDigitLst.length; i++){
        if (!isNaN(strDigitLst[i])){
            strDigit += strDigitLst[i]
        }
    }
    let digit = parseInt(strDigit);
    return digit.toLocaleString();
}
console.log("_".repeat(80));
console.log(`Executing: getStringDigit(str)`);
console.log("Expected: 1,357,924,680");
console.log("Actual:", getStringDigit("0s1a3y5w7h9a2t4?6!8?0"));

// Create a function that, given a string, returns the string's acronym (first letters only
// capitalized). Given 'there's no free lunch - gotta pay yer way', return "TNFL-GYPW". Given
// "Live from New York, it's Saturday Night!", returns "LFNYISN". 

function acronyms(str){
    let acronym = "";
    let strLst = str.split(" ");
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

