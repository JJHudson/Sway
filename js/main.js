var Sway = function(){

	var $addPlayer = $('#add_player'),
		$challenge = $('#challenge'),
		challenges = [],
		challengeAmount = 51,
		challengeActive = false,
		existingGame = false,
		$newGame = $('#new_game'),
		$menu = $('#menu'),
		$menuClose = $('#menu_close'),
		$menuOpen = $('#menu_open'),
		$pageGame = $('.page--game'),
		$pageIntro = $('.page--intro'),
		$playGame = $('#play_game')
		playerCount = 2,
		swaygame = {},
		$topic = $('#topic'),
		topics = [],
		topicAmount = 465;

	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

	function init() {

		bindUI();
		checkForGame();

	}

	/*--------------------------------------------------
		Custom Functions
	--------------------------------------------------*/

	function addPlayer() {

		playerCount++;

		var newPlayer = '<input type="text" name="player'+playerCount+'" class="player player--added" placeholder="Player '+playerCount+'" />'

		$('.intro__players').append(newPlayer);

	}

	function bindUI() {

		$addPlayer.on('click', addPlayer);
		$challenge.on('click', getChallenge);
		$menuClose.on('click', toggleMenu);
		$menuOpen.on('click', toggleMenu);
		$newGame.on('click', newGame);
		$playGame.on('click', createGame);
		$topic.on('click', getTopic);

	}

	function checkForGame() {

		if (localStorage.getItem("swaygame") !== null) {
			existingGame = true;
			$pageGame.fadeIn();
			updateScores();
		} else {
			$pageIntro.fadeIn();
		}

	}

	function createGame() {

		var players = {};

		$('.player').each(function(){

			if(this.value !== null && this.value !== '') {
				players[this.value] = 0;
			}

		});

		swaygame.players = players;

		localStorage.setItem('swaygame', JSON.stringify(swaygame));

		updateScores();
		startGame();

	}

	function getChallenge() {

    	if (!challenges.length) {
        	for (var i = 1; i < challengeAmount; i++) {
            	challenges.push(i);
        	}
    	}
    
    	var challengeIndex = Math.floor(Math.random() * challenges.length);
    	var topicVal = challenges[challengeIndex];

    	challenges.splice(challengeIndex, 1);

    	$('.challenge__image').attr('src', 'img/challenges/'+topicVal+'.jpg');

    	challengeActive = true;

	}

	function getTopic() {

		if(challengeActive) {

	    	if (!topics.length) {
	        	for (var i = 1; i < topicAmount; i++) {
	            	topics.push(i);
	        	}
	    	}
	    
	    	var topicIndex = Math.floor(Math.random() * topics.length);
	    	var topicVal = topics[topicIndex];

	    	topics.splice(topicIndex, 1);

	    	$('.topic__image').attr('src', 'img/topics/'+topicVal+'.jpg');

	    	startTimer();

	    }

	}

	function newGame() {

		$pageIntro.fadeIn();
		$pageGame.fadeOut();

		playerCount = 2;
		challenges = [];
		challengeActive = false;
		topics = [];

		$('.player').val('');
		$('.player--added').remove();
		$('.timer').html('00:30');

		localStorage.clear();


	}

	function startGame() {

		$pageIntro.fadeOut();
		$pageGame.fadeIn();

	}

	function startTimer() {

		var timeLeft = 29;
		var elem = $('.timer');

		var countdownTimer = setInterval(function(){

			if (timeLeft === 0) {

				elem.html('00:00');

				var snd = new Audio("sound/buzz.mp3");
				snd.play();

			    vibrate();

			    clearTimeout(countdownTimer);

			  } else {

			  	if(timeLeft < 10){
			  		timeLeft = '0'+timeLeft
			  	}

			    elem.html('00:'+timeLeft);
			    timeLeft--;

			  }

		},1000);

	}

	function toggleMenu() {

		$menu.toggleClass('active');

	}

	function updateScores() {

		var tempHTML = ''
		var data = JSON.parse(localStorage.getItem("swaygame"));

		
		for(key in data['players']){

			tempHTML += '<div class="scores__item"><span>'+key+'</span>'+data['players'][key]+'</div>'

		}

		$('.menu__scores').html(tempHTML);

	}

	function vibrate() {

		if (navigator.vibrate) {

			navigator.vibrate(1000);

		}

	}

	return init();

}

$(function(){

	var sway = new Sway();

});