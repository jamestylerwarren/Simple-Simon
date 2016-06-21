(function () { 
    "use strict"


    var solution = [];
    var index = 0;
    var level = 0;
    var buttons = $('.buttons');

    //------- Generate a random number between 1 - 4 --------------------// 
    function randomNumber (amount) {
            var random = Math.floor(Math.random() * (amount) + 1);
            return random;
        };


    //------- Upon start generate random number and push to solution------//
    $('#start').click(function() {
            solution = [];
            solution.push(randomNumber(4));
            console.log(solution);
        });


    //------- Listeners for colored buttons ------------------------------//
    var listenerButtons = buttons
    for (var i = 0; i < listenerButtons.length; i++) {
        listenerButtons[i].addEventListener('click', function(){
            if (solution[index] == $(this).data('number')) {
                index++;
                solution.push(randomNumber(4));
                console.log(solution);
            } else {
                solution = [];
                index = 0;
                console.log('you failed');
            }


        });
    }









})();