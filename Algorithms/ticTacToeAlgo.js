console.log("TicTacToe Algo");

let player1Moves = [];
let player2Moves = [];

for (let i = 1; i < 11; i++){
    let randomNum = generateRandomNum();
    console.log(randomNum);
    if (i % 2 != 0) {
        if (player1Moves.length < 3) {
            player1Moves.push(randomNum);
        } else {
            player1Moves[0] = player1Moves[1];
            player1Moves[1] = player1Moves[2];
            player1Moves[2] = randomNum;
            console.log(player1Moves);
        }
    } else {
        if (player2Moves.length < 3) {
            player2Moves.push(randomNum);
        } else {
            player2Moves[0] = player2Moves[1];
            player2Moves[1] = player2Moves[2];
            player2Moves[2] = randomNum;
            console.log(player2Moves);
        }
    }
} 

function generateRandomNum(){
    return Math.ceil(Math.random() * 9)
}

// console.log(player1Moves);
// console.log(player2Moves);