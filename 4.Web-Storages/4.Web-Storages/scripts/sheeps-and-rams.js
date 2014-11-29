/// <reference path="_references.js" />

var sheepsAndRams = (function () {
    'use strict';

    function checkForRamsAndSheeps(gameNumber, curNumber) {
        var subNumberArr = setNumberToArray(curNumber),
          numberArr = setNumberToArray(gameNumber),
          rams = 0,
          sheeps = 0,
          curChar,
          curSubChar,
          curCharIndex,
          i,
          l;

        for (i = 0, l = numberArr.length; i < l; i++) {
            curChar = numberArr[i];
            curSubChar = subNumberArr[i];

            if (curSubChar === curChar) {
                numberArr[i] = '^';
                subNumberArr[i] = '*';
                rams++;
            }
        }

        for (i = 0, l = numberArr.length; i < l; i++) {
            curSubChar = subNumberArr[i];
            curCharIndex = numberArr.indexOf(curSubChar);

            if (curCharIndex >= 0 && curCharIndex !== i) {
                numberArr[curCharIndex] = '^';
                subNumberArr[i] = '*';
                sheeps++;
            }
        }

        return [rams, sheeps];
    };

    function setNumberToArray(number) {
        var numberArr = [],
            i,
            l;

        for (i = 0, l = number.length; i < l; i++) {
            numberArr[i] = number[i];
        }

        return numberArr;
    }

    return {
        get: checkForRamsAndSheeps
    }
}());