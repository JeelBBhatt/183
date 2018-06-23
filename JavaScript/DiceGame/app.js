/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores,roundScores,activePlayer,gamePlayer,lastDice;
let diceDOM=document.querySelector('.dice');
let diceDOM1=document.querySelector('.dice1');
let c0=document.getElementById('current-0');
let c1=document.getElementById('current-1');
let s0=document.getElementById('score-0');
let s1=document.getElementById('score-1');

init();

document.querySelector('.btn-roll').addEventListener("click",function(){
	if(gamePlayer){
		let dice=Math.floor(Math.random() * 6)+1;
		let dice1=Math.floor(Math.random() * 6)+1;
		let activePlayScore=document.querySelector('#current-' + activePlayer);
		diceDOM.style.display='block'; 
		diceDOM1.style.display='block'; 
		diceDOM.src='dice-'+dice+'.png';
		diceDOM1.src='dice-'+dice1+'.png';

		//**********************continuos two six dice*************************8/
		// if(dice===6 && lastDice===6){
	
		// 	scores[activePlayer]=0;
		// 	document.querySelector('#score-' + activePlayer).textContent=0;
		// 	nextPlayer();
		// }

		// else if(dice!==1 && dice1!==1){
		// 	roundScores+=dice;
		// 	activePlayScore.textContent=roundScores;
		// }
		// else{
		// 	nextPlayer();
		// } 
		//lastDice=dice;

		if(dice!==1 && dice1!==1){
			roundScores+=dice+dice1;
			activePlayScore.textContent=roundScores;
		}
		else{
			nextPlayer();
		} 
	}

});

document.querySelector('.btn-hold').addEventListener("click",function(){
	if(gamePlayer){
		scores[activePlayer] +=roundScores;
		document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
		let finalScore=document.querySelector('.final-score').value;

		if(finalScore){
			finalScore=finalScore;
		}
		else{
			finalScore=100;
		}
		if(scores[activePlayer]>=finalScore){
			document.querySelector('#name-' + activePlayer).textContent="Winner!!";
			diceDOM.style.display='none'; 
			diceDOM1.style.display='none'; 
			document.querySelector('.player-'+activePlayer +'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlayer=false;
		}else{
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener("click",init);

function init(){
	scores=[0,0];
	roundScores=0;
	activePlayer=0;
	gamePlayer=true;

	diceDOM.style.display='none';
	diceDOM1.style.display='none'; 	
	c0.textContent=0;
	c1.textContents=0;
	s0.textContent=0;
	s1.textContent=0;
	document.getElementById('name-0').textContent="Player 1";
	document.getElementById('name-1').textContent="Player 2";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
}
function nextPlayer(){

	activePlayer=activePlayer===0?1:0;
	diceDOM.style.display='none'; 
	diceDOM1.style.display='none'; 
	roundScores=0;
	c0.textContent=0;
	c1.textContent=0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}
