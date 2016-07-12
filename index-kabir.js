var gamePrompt = require('game-prompt');

var colors = 
//Global Variables

var playerName;


function startGame() {
	game-prompt('S.R.S.V. Press ENTER to start.',intro);
}

function intro(){
	game-prompt('You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets. Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.', collectInfo)
}

function collectInfo(){
	game-prompt([
		'A voice comes on over the intercom',Please state you name for identification',collectName);
	])
}

function collectName(name){
	playerName = name;

	game-prompt([

	''Thank You Captain' + playerName'.',+'
	Please state you Vehicle Name for identity verification''

	],collectVehicleName)
}

function collectVehicleName (name){
	
}

startGame();