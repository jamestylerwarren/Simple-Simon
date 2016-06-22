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
		animate();
		return random;
	};

	//------- Upon start generate random number and push to solution ------//
	
	function startGame () {
		$('#start').click(function() {
			solution = [];
			index = 0;
			solution.push(randomNumber(4));
			level = solution.length;
			$('span').text(level);
			console.log(solution);
		});
	} startGame ();

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
					console.log('fail');
				}

			if (index == solution.length && correct === true) {
					solution.push(randomNumber(4));
					console.log(solution);
					index = 0;
					level = solution.length;
					$('span').text(level);
				}
		});
	} playGame();

	//-------------- Light up buttons --------------//

	function clickLight() {
		buttons.each(function(){
			$(this).mouseup(function(){
				$(this).animate({
					'opacity': '1'
				}, 75).animate({
					'opacity': '.75'
				}, 75)
			})
		});
	} clickLight();

	//------------ Animate Light Sequence for Array --------//

	function animate () {
		solution.forEach(function(random, index) {
			setTimout(function() {
				$('[data-number="' + random + '"]').animate({
				'opacity': '1'
				}, 500).animate ({
					'opacity': '.75'
				}, 500);
			}, 1000 * index);
		})
	}


	
	
	









})();