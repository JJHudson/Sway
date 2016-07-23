<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body>

	<div class="logo">
		<img src="./img/logo.png" alt="Sway" width="100%" />
	</div>

	<div class="page page--intro">

		<div class="block block--centered">

			<div class="intro__players">

				<input type="text" name="player1" class="player" placeholder="Player 1" />
				<input type="text" name="player2" class="player" placeholder="Player 2" />

			</div>

			<div class="intro__buttons">

				<div id="add_player" class="btn btn--purple">Add a player</div>
				<div id="play_game" class="btn btn--green">Start Playing</div>

			</div>

		</div>

	</div>

	<div class="page page--game">

		<div id="menu_open" class="burger">
			<img src="img/burger.png" width="44" alt="menu" />
		</div>

		<div id="menu" class="menu active">

			<img id="menu_close" src="img/close.png" class="menu__close" width="44" />

			<div id="new_game" class="btn btn--purple btn--new-game">Start New Game</div>

			<div class="menu__scores"></div>

		</div>

		<div class="cards cf">

			<div id="challenge" class="cards__card cards__card--challenge">
				<img src="img/face_challenge.jpg" alt="Challenge" width="100%" class="challenge__image" />
			</div>

			<div id="topic" class="cards__card cards__card--topic">
				<img src="img/face_topic.jpg" alt="Topic" width="100%" class="topic__image" />
			</div>

		</div>

		<div class="timer">00:30</div>

	</div>




	<!-- SCRIPTS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="js/main.js"></script>

</body>
</html>