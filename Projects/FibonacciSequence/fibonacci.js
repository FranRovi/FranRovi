// console.log("Hello World! Fibonacci Rocks!")
function userNum(){
    let num = document.getElementById("num").value;
    // console.log(num);
    if (num < 0) {
        hideMessage();
        showMessage();
    }else {
        hideMessage();
        fibonacci(num);
    }    
}

function fibonacci(val){
    // Used BigInt(n) to aviod getting XXX infinity when calling fibonacci 1500, aprox. or greater.
    let solution = [];
    console.log(val);
        if (val == 0) {
            solution = [0n];
        } else if (val == 1) {
            solution = [1n];
        } else {
            solution = [0n, 1n];
            for (let i=2; i <= val; i++){
                solution.push(solution[i-2] + solution[i-1]);
            }
        }
        let last_number = solution[solution.length - 1];
        console.log(`fibonacci_${val}: ${last_number}`);
        document.getElementById("fibo_result").innerHTML = last_number;
        showScore();
}


function showScore(){
    $("#results").removeClass("hide")
}
function hideScore(){
    $("#results").addClass("hide")
}
function showMessage(){
    $("#negative_num").removeClass("hide")
}
function hideMessage(){
    $("#negative_num").addClass("hide")
}

