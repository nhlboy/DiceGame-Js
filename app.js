/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


// Decalre variables
var scores, roundScore, activePlayer, dice, playerNameFirst, playerNameSecond;

// Initialize variables
scores = [0,0];
roundScore = 0;
activePlayer = 1;
//playerNameFirst = prompt('What is you new Player?');
//playerNameSecond = prompt('And what is you name, another Player?');

// Inplement GRM to generate only 6 integers
dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).innerHTML = '<b><em>' + dice +'</em></b>';
document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent = testEntry;
// console.log(x);


// document.querySelector('#name-0').textContent = playerNameFirst;

// document.querySelector('#name-1').textContent = playerNameSecond;

document.querySelector('.dice').style.display = 'none';

function btn() {
    //do somethinh here
}

document.querySelector('.btn-roll').addEventListener('click ')

