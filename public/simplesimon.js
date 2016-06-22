(function () { 
	"use strict"


	var solution = [];
	var index = 0;
	var buttons = $('.buttons');
	var level;
	var correct = true;
	var random;



	//------- Generate a random number between 1 - 4 --------------------// 

	function randomNumber (amount) {
		random = Math.floor(Math.random() * (amount) + 1);
		return random;
	};

	//------- Upon start generate random number and push to solution ------//
	
	function startGame () {
		$('#start').click(function() {
			solution = [];
			index = 0;
			solution.push(randomNumber(4));
			animate();
			level = solution.length;
			$('span').text(level);
			correct = true;
			$('#gameInfoP').css('visibility', 'hidden'); //reset para to hidden
		});
	} startGame();

	//------- Evaluate user play ------------------------------//

	function playGame() { 
		buttons.click(function() {
			if (solution[index] == $(this).data('number')) {
					index++;
				} else {
					solution = [];
					index = 0;
					level = 0;
					correct = false;
					$('#gameInfoP').css('visibility', 'visible'); //reveal para
				}

			if (index == solution.length && correct === true) {
					solution.push(randomNumber(4));
					animate();
					index = 0;
					level = solution.length;
					$('span').text(level);
				}
		});
	} playGame();

	//-------------- Light up buttons --------------//

	function clickLight() {
		buttons.each(function(){
			$(this).mousedown(function(){
				$(this).animate({
					'opacity': '1'
				}, 300).animate({
					'opacity': '.50'
				}, 300)
			})
		});
	} clickLight();

	//------------ Animate Light Sequence for Array --------//

	function animate () {
		solution.forEach(function(random, index) {
			setTimeout(function() {
				$('[data-number="' + random + '"]').animate({
				'opacity': '1'
				}, 400).animate ({
					'opacity': '.50'
				}, 400);
			}, 500 * (index + 1));
		})
	}


	
	
	









})();