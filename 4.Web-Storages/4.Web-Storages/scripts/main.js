/// <reference path="_references.js" />

window.onload = function startGame() {
    'use strict';

    var gameNumber = getRandomNumber(1000, 9999).toString(),
        $button = $('#submit'),
        attempts = 0;

    loadChart();
    console.log(gameNumber);

    $button.on('click', function () {
        var guess = getSubmittedNumber(),
            currentSheepsAndRams,
            rams,
            player = {},
            log = $('#log');

        if (guess) {
            currentSheepsAndRams = sheepsAndRams.get(gameNumber, guess);
            printSheepsAndRams(guess, currentSheepsAndRams, log);
            rams = currentSheepsAndRams[0];

            if (rams === 4) {
                player.name = prompt("Please enter your name");
                player.score = getPlayerScore(attempts);
                loadChart(player);
            }

            attempts++;
        }
    });

    function printSheepsAndRams(number, sheepsAndRams, logger) {
        var $br = $('<br />');

        logger.append('number: ' + number + ', sheeps: ' + sheepsAndRams[1] + ', rams: ' + sheepsAndRams[0]).append($br);
    };

    function getPlayerScore(attemptsCount) {
        return Math.round(1000 - 20 * attemptsCount);
    };

    function getRandomNumber(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    };

    function getSubmittedNumber() {
        var submittedValue = $('#num').val(),
            isValidNumber = true;

        if (!submittedValue) {
            isValidNumber = false;
        }
        else if (submittedValue.length !== 4) {
            isValidNumber = false;
        }
        else if (typeof parseInt(submittedValue) !== 'number') {
            isValidNumber = false;
        }

        if (isValidNumber === false) {
            alert('Please enter 4 digit number!');
        }
        else {
            return submittedValue;
        }
    };

};