(function () { 
    "use strict"


    var solution = [];
    var index = 0;
    var buttons = $('.buttons');

    //------- Generate a random number between 1 - 4 --------------------// 
    function randomNumber (amount) {
            var random = Math.floor(Math.random() * (amount) + 1);
            return random;
        };


    //------- Upon start generate random number and push to solution------//
    $('#start').click(function() {
            solution.push(randomNumber(4));
            console.log(solution);
    });


    //------- Listeners for colored buttons ------------------------------//
    


    buttons.click(function() {
        if (solution[index] == $(this).data('number')) {
                index++;
            } else {
                solution = [];
                index = 0;
                console.log('you failed');
            }

        if (index == solution.length) {
                solution.push(randomNumber(4));
                console.log(solution);
                index = 0;
                console.log('correct');
            }
    });
    buttons.each(function(){
        $(this).mousedown(function(){
            $(this).animate({
                'opacity': '1'
            }, 75).animate({
                'opacity': '.75'
            }, 75)
        })
    });


    var listenerButtons = buttons
    
    









})();