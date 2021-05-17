/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, currentScore, activePlayer, setScore, dieDom1, dieDom2;

function initialize () {

    scores = [0,0];
    currentScore = 0;
    setScore = prompt('Welcome Player!!! Before starting the game, please ENTER the number points you want to reach in order to win the game');
    setStartingPlayer = prompt('Which player should be playing first? Please answer "1" or "2"');
    activePlayer = setStartingPlayer - 1;
    dieDom1 = document.getElementById('dice-1');
    dieDom2 = document.getElementById('dice-2');
        
    // Hide the dice
    dieDom1.style.display = 'none';
    dieDom2.style.display = 'none';
    // Display the buttons
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    // Set game scores, player and classes to default values
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    if (setStartingPlayer === '1') {
        document.querySelector('.player-0-panel').classList.add('active');
    } else {
        document.querySelector('.player-1-panel').classList.add('active');
    };
};

// switch to active player
function togglePlayer() {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0; // Ternary Operator
    currentScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

// Set game scores, player and classes to winner player mode
function playerWin() {
   // change the name of the player to winner
   document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';  
   // apply the winner class on the winning player panel
   document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
   // remove the active class from the winning panel
   document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
   dieDom1.style.display = 'none';
   dieDom2.style.display = 'none';
   document.querySelector('.btn-hold').style.display = 'none';
   document.querySelector('.btn-roll').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', (event)=> {
    initialize();
});

document.querySelector('.btn-roll').addEventListener('click', (event)=> {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    console.log(`die1: ${die1}; die2: ${die2};`);

    dieDom1.src = `images/dice-${die1}.png`;
    dieDom2.src = `images/dice-${die2}.png`;
    dieDom1.style.display = 'block';
    dieDom2.style.display = 'block';

    if (die1 !== 1 && die2 !== 1) {
        currentScore += die1 + die2;
        console.log(`Current Score: ${currentScore}`);
        document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
        if (currentScore >= setScore || (currentScore + scores[activePlayer]) >= setScore) {
            playerWin();
            document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer] + currentScore;
        }
    } else {
        togglePlayer();
    }
});

document.querySelector('.btn-hold').addEventListener ('click', (event)=> {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= setScore) {
        playerWin(); 
    } else {
        togglePlayer();
    }    
});













