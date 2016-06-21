var solution = [];
var buttons = $('.buttons');
var index = 0;

function randomNumber(amount) {
    var random = Math.floor(Math.random() * (amount) + 1);
    return random;
};

buttons.each(function() {
    $(this).click(function() {
        if (solution[index] == $(this).data('value')) {
            index++;
            console.log("success.")
            solution.push(randomNumber(4));
            console.log(solution);

        } else {
            index = 0;
            solution = [];
            console.log("failure.")
        }
    });
});

$('#start').click(function() {
    solution = [];
    index = 0;
    solution.push(randomNumber(4));
    console.log(solution);
});